"use client";

import { useState, useEffect } from "react";
import { Plus, XIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandList,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Alert, AlertTitle } from "~/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { numberValidator } from "~/lib/validate";
import { Currency } from "~/lib/types";
type ValueType = Currency[keyof Currency];
type CurrencyState = ValueType & {
  displayValue: string;
  error: boolean;
}
export default function CurrencyConverter({
  currencyMap,
}: {
  currencyMap: Currency;
}) {
  const usd = currencyMap["USD"];
  const thb = currencyMap["THB"];
  const eur = currencyMap["EUR"];
  let anchor = 0;

  const [currencies, setCurrencies] = useState<CurrencyState[]>([
    { ...usd,
      displayValue: usd.value.toFixed(2).toString(),
      error: false,
    },
    { ...eur,
      displayValue: eur.value.toFixed(2).toString(),
        error: false,
     },
    { ...thb,
      displayValue: thb.value.toFixed(2).toString(),
        error: false,
     },
  ]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // TODO: Should add schema validation
    const savedCurrencyList = window.localStorage.getItem('savedCurrencyList')
    if (savedCurrencyList) {
      const savedListObj = JSON.parse(savedCurrencyList) as CurrencyState[]
      if (savedListObj.length > 0) {
        const anchorCurrencyLocal = window.localStorage.getItem('anchor');
        let anchor;
        if (anchorCurrencyLocal) {
          anchor = JSON.parse(anchorCurrencyLocal)
        } else {
          anchor = savedListObj[0]?.code
        }
        const anchorCurrency = savedListObj[anchor]
        const changePercentage = (anchorCurrency.value - currencyMap[savedListObj[anchor].code].value) / currencyMap[savedListObj[anchor].code].value; // -0.1%
        Object.entries(currencyMap).forEach((currencyObjPair) => {
        const changedValue = currencyMap[currencyObjPair[1].code].value + currencyMap[currencyObjPair[1].code].value * changePercentage
          currencyMap[currencyObjPair[1].code].value = changedValue
        })
        savedListObj.forEach((currency, currencyIndex, array) => {
          array[currencyIndex] = {
            ...currency,
            ...currencyMap[currency.code],
            displayValue: currencyMap[currency.code].value.toFixed(2).toString(),
            error: false,
          }
        });  
        setCurrencies(savedListObj)
      }
    }
  }, [])
  const handleValueChange = (index: number, newValue: string) => {
    const validationResult = numberValidator.safeParse(newValue);
    const changedCurrency = currencies[index]; // initial
    if (validationResult.success) {
      const changePercentage = (validationResult.data - changedCurrency.value) / changedCurrency.value; // -0.1%
      Object.entries(currencyMap).forEach((currencyObjPair) => {
        const changedValue = currencyMap[currencyObjPair[1].code].value + currencyMap[currencyObjPair[1].code].value * changePercentage
        currencyMap[currencyObjPair[1].code].value = changedValue
      })
      currencies.forEach((currency, currencyIndex, array) => {
        array[currencyIndex] = {
          ...currency,
          ...currencyMap[currency.code],
          error: false,
        }
        if (currencyIndex === index) {
          array[currencyIndex].displayValue = newValue
        } else {
          array[currencyIndex].displayValue = currencyMap[currency.code].value.toFixed(2).toString()
        }
      });  
    } else {
      currencies[index].error = true
      currencies[index].displayValue = newValue
    }
    const updatedCurrencyList = [...currencies];
  setCurrencies(updatedCurrencyList);
  window.localStorage.setItem('savedCurrencyList', JSON.stringify(updatedCurrencyList));
  anchor = index;
  window.localStorage.setItem('anchor', JSON.stringify(index));
  };

  const addCurrency = (currency: Currency[string]) => {
    const addedCurrencyList = [
      ...currencies,
      {
        value: currency.value,
        name: currency.name,
        flag: currency.flag,
        code: currency.code,
        displayValue: currency.value.toFixed(2).toString(),
        error: false
      },
    ]
    setCurrencies(addedCurrencyList);
    window.localStorage.setItem('savedCurrencyList', JSON.stringify(addedCurrencyList))
    window.localStorage.setItem('anchor', JSON.stringify(anchor > currencies.length - 2 ? anchor : 0));
    setOpen(false);
  };

  const removeCurrency = (index: number) => {
    const filteredCurrencies = currencies.filter((_, i) => i !== index)
    setCurrencies(filteredCurrencies);
    window.localStorage.setItem('savedCurrencyList', JSON.stringify(filteredCurrencies))
  };

  return (
    <div className="space-y-4">
      {currencies.map((currency, index) => (
         <div key={index} className="relative">
         <div className="flex items-center space-x-2 mb-1">
           <span className="text-2xl" aria-hidden="true">
             {currency.flag}
           </span>
           <span className="font-bold" aria-label={currency.name}>
             {currency.code}
           </span>
           <span className="text-sm text-muted-foreground">
             {currency.name}
           </span>
         </div>
         <input
           value={currency.displayValue}
           onChange={(e) => handleValueChange(index, e.target.value)}
           className="w-full text-3xl font-medium bg-transparent border-b border-input focus:outline-none focus:border-primary transition-colors"
           aria-label={`Amount in ${currency.name}`}
         />
         <Button
           variant="ghost"
           size="icon"
           onClick={() => removeCurrency(index)}
           className="absolute right-0 top-8 text-muted-foreground hover:text-foreground hover:bg-red-100 hover:text-red-500"
           aria-label={`Remove ${currency.name}`}
         >
           <XIcon className="h-6 w-6" aria-label="Remove Currency" />
         </Button>
         {currency.error && (
            <Alert variant="destructive" className="mt-2">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>
                Error: Please input a proper number greater than 0.
              </AlertTitle>
            </Alert>
          )}
         </div>
      ))}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-start text-white hover:text-white bg-primary hover:bg-primary/90 text-lg py-6"
        >
          <Plus className="mr-2 h-5 w-5" />
          Add Currency
        </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 text-xl">
          <Command className="text-xl min-w-64">
            <CommandInput placeholder="Search currency..." />
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandList>
              {Object.entries(currencyMap)
                .filter((c) => !currencies.some((curr) => curr.code === c[0]))
                .map((currency) => (
                  <CommandItem
                    key={currency[1].name}
                    onSelect={() => addCurrency(currency[1])}
                    className="text-xl"
                  >
                    <span className="mr-2" aria-hidden="true">
                      {currency[1].flag}
                    </span>
                    {currency[1].name} ({currency[1].code})
                  </CommandItem>
                ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
