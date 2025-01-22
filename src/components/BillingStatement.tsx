import React from "react";
import { View, Text } from "react-native";
{
  /* This component renders each individual billing statement. Some requirements to note:
  1. Display product name, date and amount.
  2. Handle the case when date is undefined to prevent app crash.
  3. Display price in this format: $59.99
  4. You dont need to worry about styling for this assignment.
  5. If price is above 100, add another line of text that says "Big Savings!". */
}

type BillingStatementProps = {
  name: string;
  date?: Date;
  amount: number;
};

export const BillingStatement = ({name, date, amount}: BillingStatementProps) => {
  return(
    <View>
      <Text>{name}</Text>
      {date != undefined && <Text>{date.toISOString()}</Text>}
    </View>
  )
};
