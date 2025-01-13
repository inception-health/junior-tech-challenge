import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { BillingStatement } from "../components/BillingStatement";

type BillingStatement = {
  id: number;
  productName?: string;
  date?: string;
  amount: number;
};

 {/* This screen returns previous purchases for user to view.
  In real life, this data would come from some external source, such as API.
  However, for this task it is simplified and all data is stored inside array called billingStatements. */}

export const BillingHistoryScreen = () => {
  const billingStatements: BillingStatement[] = [
    {
      id: 1,
      productName: "Jeans",
      date: undefined,
      amount: 59.99,
    },
    {
      id: 2,
      productName: "Jacket",
      date: "2021-01-02",
      amount: 215.99,
    },
    {
      id: 3,
      productName: "Sweatshirt",
      date: "2021-01-03",
      amount: 29.99,
    },
  ];

  return (
    <View style={Styles.container}>
      <Text>Billing History</Text>

      {/* Show Billing Statements here */}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
