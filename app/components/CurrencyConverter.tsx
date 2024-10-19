"use client";

import { useState } from "react";
import { Minus, ChevronsUpDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
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
import { Fragment } from "react";
import { Currency } from "~/lib/types";

export default function CurrencyConverter({
  currencyList,
}: {
  currencyList: Currency[];
}) {
  const usd = currencyList.find((c) => c.code === "USD") as Currency;
  const thb = currencyList.find((c) => c.code === "THB") as Currency;
  const eur = currencyList.find((c) => c.code === "EUR") as Currency;
  const [currencies, setCurrencies] = useState<Currency[]>([
    { ...usd },
    { ...eur },
    { ...thb },
  ]);
  const [open, setOpen] = useState(false);

  const handleValueChange = (index: number, newValue: string) => {
    const validationResult = numberValidator.safeParse(newValue);
    const newCurrencies = currencies.map((currency, i) => {
      if (i === index) {
        return {
          ...currency,
          ...(validationResult.success && { value: validationResult.data }),
          displayValue: newValue,
          error: !validationResult.success,
        };
      } else {
        const value =
          validationResult.success &&
          (validationResult.data / (currencies[index].value as number)) *
            (currency.value as number);

        return {
          ...currency,
          ...(value && {
            value: value,
            displayValue: value.toString(),
            error: false,
          }),
        };
      }
    });
    setCurrencies(newCurrencies);
  };

  const addCurrency = (currency: Currency) => {
    if (!currencies.some((c) => c.code === currency.code)) {
      const baseValue = currencies[0]?.value || 1;
      setCurrencies([
        ...currencies,
        { ...currency, value: baseValue * currency.value },
      ]);
    }
    setOpen(false);
  };

  const removeCurrency = (index: number) => {
    setCurrencies(currencies.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {currencies.map((currency, index) => (
        <Fragment key={index}>
          <div className="flex items-center space-x-2">
            <div className="flex justify-between items-center basis-[10%]">
              <span className="text-3xl" aria-hidden="true">
                {currency.flag}
              </span>
              <span className="font-bold w-12" aria-label={currency.name}>
                {currency.code}
              </span>
            </div>
            <p className="basis-[50%]">{currency.name}</p>
            <Input
              value={currency.displayValue}
              onChange={(e) => handleValueChange(index, e.target.value)}
              className="min-w-24 flex-grow-[auto] text-xl"
              aria-label={`Amount in ${currency.name}`}
            />
            <Button
              variant="outline"
              size="icon"
              className="flex-basis-[10%] flex-basis-0 flex-shrink-0 text-xl"
              onClick={() => removeCurrency(index)}
              aria-label={`Remove ${currency.name}`}
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
          {currency.error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>
                Error: Please input a proper number greater than 0.
              </AlertTitle>
            </Alert>
          )}
        </Fragment>
      ))}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-xl"
          >
            Add Currency
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 text-xl">
          <Command className="text-xl min-w-64">
            <CommandInput placeholder="Search currency..." />
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandList>
              {currencyList
                .filter((c) => !currencies.some((curr) => curr.code === c.code))
                .map((currency) => (
                  <CommandItem
                    key={currency.code}
                    onSelect={() => addCurrency(currency)}
                    className="text-xl"
                  >
                    <span className="mr-2" aria-hidden="true">
                      {currency.flag}
                    </span>
                    {currency.name} ({currency.code})
                  </CommandItem>
                ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
