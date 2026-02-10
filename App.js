import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, RefreshControl, ScrollView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const webViewRef = useRef(null);

  // ميزة سحب الشاشة للتحديث (Pull to Refresh)
  const onRefresh = () => {
    setRefreshing(true);
    webViewRef.current?.reload();
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <WebView
          ref={webViewRef}
          source={{ uri: 'https://shofyou.com' }} // ضع رابط موقعك هنا
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFileAccess={true}
          allowFileAccessFromFileURLs={true}
          allowUniversalAccessFromFileURLs={true}
          allowsFullscreenVideo={true} // دعم الفيديو بملء الشاشة
          onHttpError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView HTTP error: ', nativeEvent);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // التعامل مع شريط الحالة
  },
});
