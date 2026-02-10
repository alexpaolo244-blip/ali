import React, { useRef } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webViewRef = useRef(null);

  // دالة لمنع الروابط من الفتح في كروم الخارجي
  const handleNavigationStateChange = (navState) => {
    // إذا كان الرابط لا يتبع موقعك، يمكنك التحكم به هنا
    // حالياً سيبقيه داخل الـ WebView
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://shofyou.com' }}
        style={styles.webview}
        
        // إعدادات الرفع والاحترافية
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFileAccess={true}
        allowsFullscreenVideo={true}
        mixedContentMode="always"
        
        // منع الخروج للمتصفح الخارجي
        onShouldStartLoadWithRequest={(request) => {
          // يسمح فقط بفتح الروابط داخل التطبيق
          return true; 
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  webview: {
    flex: 1,
    // تم حذف الـ Padding الزائد الذي سبب المساحة البيضاء في صورتك
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
