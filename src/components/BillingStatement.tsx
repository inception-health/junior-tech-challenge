import React from "react";
import { StyleSheet, View, Text } from 'react-native'
import { BillingStatementProps } from '../screens/BillingHistory'

{
  /* This component renders each individual billing statement. Some requirements to note:
  1. Display product name, date and amount.
  2. Handle the case when date is undefined to prevent app crash.
  3. Display price in this format: $59.99
  4. You dont need to worry about styling for this assignment.
  5. If price is above 100, add another line of text that says "Big Savings!". */
}

// type BillingStatementProps = {};

export const BillingStatement = ({productName, date, amount}: BillingStatementProps) => {
  return (
    <View style={styles.primary}>
      <Text>
        {productName}
      </Text>
      <Text>
        {date  || ""}
      </Text>
      <Text>
        {`$${amount}`}
        {amount > 100.00 ? <Text>Big Savings!</Text> : null } 
      </Text>
    </View>

  );
};


const styles = StyleSheet.create({
  primary: {
    flex: 1,
    height: 80,
    justifyContent: "center",
    alignItems: 'center'
  }
})