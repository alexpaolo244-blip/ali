import React, { useRef } from 'react';
import { StyleSheet, SafeAreaView, Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webViewRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        // ضع رابط موقعك هنا بدقة
        source={{ uri: 'https://shofyou.com' }} 
        style={{ flex: 1 }}
        
        // --- إعدادات الاحترافية (مثل فيسبوك) ---
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFileAccess={true}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        
        // دعم رفع الصور والفيديوهات من المعرض مباشرة
        onFileDownload={({ nativeEvent: { downloadUrl } }) => {
          // يمكن إضافة منطق التحميل هنا إذا لزم الأمر
        }}
        
        // دعم تشغيل الفيديو بملء الشاشة (Full Screen)
        allowsFullscreenVideo={true} 
        
        // تحسين الأداء ومنع التحديث التلقائي عند السحب
        bounces={false} 
        overScrollMode="never"
        
        // معالجة الأخطاء
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView HTTP error: ', nativeEvent);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // التعامل مع المنطقة العلوية للهاتف (Status Bar) لكي لا يغطيها الموقع
    paddingTop: Platform.OS === 'android' ? 35 : 0, 
  },
});
