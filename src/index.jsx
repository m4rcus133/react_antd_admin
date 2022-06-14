import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app';
import * as serviceWorkerRegistration from '@/serviceWorkerRegistration';
import { ConfigProvider } from "antd";
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import msMY from 'antd/lib/locale/ms_MY';
import LanguageContextProvider from "@/context/locale/LanguageContext";
import ThemeProvider from "@/context/theme/ThemeProvider";
//import reportWebVitals from './reportWebVitals';

const languages = {
  en: enUS,
  zh: zhCN,
  ms: msMY
}

const language = localStorage.getItem('currentLanguage') || 'en';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <ThemeProvider>
        <ConfigProvider locale={languages[language]}>
          <LanguageContextProvider>
            <App />
          </LanguageContextProvider>
        </ConfigProvider>
      </ThemeProvider>
  // </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
