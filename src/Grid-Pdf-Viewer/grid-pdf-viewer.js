import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    width: 500,
    alignItems: "center",
    backgroundColor: "#00ace6",
    margin: 20,
    height: 25,
  },
  headerItem: {
    width: 100,
  },
  dataContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    width: 500,
    alignItems: "center",
    backgroundColor: "#efeff5",
    margin: "10 20 10 20",
    height: 25,
  },
  dataItem: {
    width: 100,
  },
});

// Create Document Component
export default function PdfDocument(props) {

  const renderPreview = (data) => {
    return Object.keys(data).map((key) => {
      console.log(`key: ${key}, value: ${JSON.stringify(data[key])}`);
      return (
        <View key={key} style={styles.dataContainer}>
          <Text key={`id_${key}`} style={styles.dataItem}>{data[key].id}</Text>
          <Text key={`name_${key}`} style={styles.dataItem}>{data[key].name}</Text>
          <Text key={`age_${key}`} style={styles.dataItem}>{data[key].age}</Text>
          <Text key={`email_${key}`} style={styles.dataItem}>{data[key].email}</Text>
        </View>
      );
    });
  };

  return (
    <Document>
      <Page style={styles.page}>
        <View>
          <View style={styles.headerContainer}>
            <Text className="id" style={styles.headerItem}>ID</Text>
            <Text className="name" style={styles.headerItem}>Name</Text>
            <Text className="age" style={styles.headerItem}>Age</Text>
            <Text className="email" style={styles.headerItem}>Email</Text>
          </View>
          <View>
            {Object.keys(props.data).length > 0
              ? renderPreview(props.data)
              : ""}
          </View>
        </View>
      </Page>
    </Document>
  );
}
