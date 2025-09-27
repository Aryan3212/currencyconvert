import { useState, useEffect } from "react";
import { Plus, XIcon } from "lucide-react";
import { LoaderCircle } from "lucide-react";
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
};

function isFalsy(item: unknown): boolean {
  return item === null || item === undefined;
}
export default function CurrencyConverter({
  currencyMap,
  convertList = []
}: {
  currencyMap: Currency;
  convertList: string[];
}) {
  // Single, shared formatter for display values (2 decimal places)
  const numberFormatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const usd = currencyMap["USD"];
  const thb = currencyMap["THB"];
  const eur = currencyMap["EUR"];
  let anchor = 0;
  const defaultCurrencies = [
    { ...usd, displayValue: numberFormatter.format(usd.value), error: false },
    { ...eur, displayValue: numberFormatter.format(eur.value), error: false },
    { ...thb, displayValue: numberFormatter.format(thb.value), error: false },
  ]
  const [currencies, setCurrencies] = useState<CurrencyState[]>(defaultCurrencies);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  // Function to process localStorage and extract currency data
  const processLocalStorageCurrencies = (): CurrencyState[] => {
    try {
      const savedCurrencyList =
        window.localStorage.getItem("savedCurrencyList");
      if (!savedCurrencyList) {
        return [];
      }

      const savedListObj = JSON.parse(savedCurrencyList) as CurrencyState[];
      if (!Array.isArray(savedListObj) || savedListObj.length === 0) {
        return [];
      }

      const anchorCurrencyLocal = window.localStorage.getItem("anchor");
      let anchor = anchorCurrencyLocal
        ? JSON.parse(anchorCurrencyLocal)
        : 0;

      if (
        isFalsy(anchor) ||
        !savedListObj[anchor] ||
        !currencyMap[savedListObj[anchor].code]
      ) {
        return [];
      }

      const anchorCurrency = savedListObj[anchor];
      const changePercentage =
        (anchorCurrency.value - currencyMap[savedListObj[anchor].code].value) /
        currencyMap[savedListObj[anchor].code].value;

      // Create a copy of currencyMap to avoid direct mutation
      const updatedCurrencyMap = { ...currencyMap };

      Object.entries(updatedCurrencyMap).forEach(([code, currency]) => {
        const changedValue = currency.value + currency.value * changePercentage;
        updatedCurrencyMap[code].value = changedValue;
      });

      const updatedList = savedListObj.map((currency) => ({
        ...currency,
        ...updatedCurrencyMap[currency.code],
        displayValue: numberFormatter.format(
          updatedCurrencyMap[currency.code].value
        ),
        error: false,
      }));

      return updatedList;
    } catch (error) {
      console.error("Error loading saved currencies:", error);
      return [];
    }
  };

  // In your component
  useEffect(() => {
    if (convertList.length > 1) {
      const convertCurrencies = convertList.map((code) => ({
        ...currencyMap[code],
        displayValue: numberFormatter.format(currencyMap[code].value),
        error: false
      }));
      setCurrencies(convertCurrencies);
    } else {
      const processedCurrencies = processLocalStorageCurrencies();
      if (processedCurrencies.length > 0) {
        setCurrencies(processedCurrencies);
      }
    }

    setLoading(false);
  }, [convertList]);
  const handleValueChange = (index: number, newValue: string) => {
    const validationResult = numberValidator.safeParse(newValue);
    const changedCurrency = currencies[index]; // initial
    if (validationResult.success) {
      const changePercentage =
        (validationResult.data - changedCurrency.value) / changedCurrency.value; // -0.1%
      Object.entries(currencyMap).forEach((currencyObjPair: [string, ValueType]) => {
        const changedValue =
          currencyMap[currencyObjPair[1].code].value +
          currencyMap[currencyObjPair[1].code].value * changePercentage;
        currencyMap[currencyObjPair[1].code].value = changedValue;
      });
      currencies.forEach((currency, currencyIndex, array) => {
        array[currencyIndex] = {
          ...currency,
          ...currencyMap[currency.code],
          error: false,
        };
        if (currencyIndex === index) {
          array[currencyIndex].displayValue = newValue;
        } else {
          array[currencyIndex].displayValue = numberFormatter.format(
            currencyMap[currency.code].value
          );
        }
      });
    } else {
      currencies[index].error = true;
      currencies[index].displayValue = newValue;
    }
    const updatedCurrencyList = [...currencies];
    setCurrencies(updatedCurrencyList);
    window.localStorage.setItem(
      "savedCurrencyList",
      JSON.stringify(updatedCurrencyList)
    );
    anchor = index;
    window.localStorage.setItem("anchor", JSON.stringify(index));
  };

  const addCurrency = (currency: Currency[string]) => {
    const addedCurrencyList = [
      ...currencies,
      {
        value: currency.value,
        name: currency.name,
        flag: currency.flag,
        code: currency.code,
        symbol: currency.symbol,
        displayValue: numberFormatter.format(currency.value),
        error: false,
      },
    ];
    setCurrencies(addedCurrencyList as CurrencyState[]);
    window.localStorage.setItem(
      "savedCurrencyList",
      JSON.stringify(addedCurrencyList)
    );
    setOpen(false);
  };
  const handleDisplayValueChange = (index: number, newValue: string, focus: boolean) => {
    const updatedCurrencies = [...currencies];
    updatedCurrencies[index].displayValue = focus ? updatedCurrencies[index].value.toFixed(2).toString() : newValue;
    setCurrencies(updatedCurrencies);
  };
  const removeCurrency = (index: number) => {
    const filteredCurrencies = currencies.filter((_, i) => i !== index);
    setCurrencies(filteredCurrencies);
    window.localStorage.setItem(
      "savedCurrencyList",
      JSON.stringify(filteredCurrencies)
    );
    window.localStorage.setItem(
      "anchor",
      JSON.stringify(anchor > currencies.length - 2 ? anchor : 0)
    );
  };

  return loading ? (
    <div className="flex flex-col justify-center items-center h-[360px]">
      <LoaderCircle className="animate-spin h-8 w-8" />
      <h1 className="text-center text-sm text-slate-600">
        Loading saved state..
      </h1>
    </div>
  ) : (
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
          <div className="w-full flex bg-transparent border-b border-input">
           <span className="font-bold inline mr-1 text-2xl" aria-label={currency.name}>
            {currency.symbol}
          </span>
          <input
            value={currency.displayValue}
            onChange={(e) => handleValueChange(index, e.target.value)}
            onFocus={() => {
              handleDisplayValueChange(index, currency.value.toFixed(2).toString(), true);
            }}
            onBlur={() => {
              if (!currency.error) {
                handleDisplayValueChange(index, numberFormatter.format(currency.value), false);
              }
              }
            }
            className="basis-5/6 text-3xl font-medium focus:outline-none focus:border-primary transition-colors"
            name={`Amount in ${currency.name}`}
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
          </div>
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
