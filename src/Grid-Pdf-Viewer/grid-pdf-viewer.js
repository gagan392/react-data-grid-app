import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export default function PdfDocument(props) {
  return (
    <Document>
      <Page style={styles.page}>
        {props.data
          ? props.data.map((a, index) => {
              return (
                <View key={index} style={styles.movieContainer}>
                  <View style={styles.movieDetails}>
                    <Text style={styles.movieTitle}>{a.title}</Text>
                    <View style={styles.subtitle}>
                      <View style={styles.vote}>
                        <Text style={styles.vote_pop_text}>Popularity</Text>
                        <Text style={styles.vote_pop}>{a.popularity}</Text>
                      </View>
                    </View>
                    <View style={styles.overviewContainer}>
                      <Text style={styles.movieOverview}>{a.overview}</Text>
                    </View>
                    <View style={styles.detailsFooter}>
                      <Text style={styles.lang}>
                        Language: {a.original_language.toUpperCase()}
                      </Text>
                      <Text style={styles.vote_average}>
                        Average Votes: {a.vote_average}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })
          : ""}
      </Page>
    </Document>
  );
}