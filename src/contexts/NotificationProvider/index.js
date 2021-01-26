import React, { createContext, useContext, useRef } from "react";
import { SnackbarProvider } from "notistack";

export const NotificationContext = createContext();

export const useNotificationContext = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
  const snackbarProviderRef = useRef();
  const TIME_DEFAULT = 5000;
  const NOTIFICATION_TYPES = {
    DEFAULT: "default",
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    INFOs: "info",
  };

  const createNotification = (notification) => {
    const { type, message, time, vertical, horizontal, persist } = notification;

    return snackbarProviderRef.current.enqueueSnackbar(message, {
      variant: type || NOTIFICATION_TYPES.DEFAULT,
      autoHideDuration: time || TIME_DEFAULT,
      persist: persist || false,
      preventDuplicate: true,

      anchorOrigin: {
        vertical: vertical || "bottom",
        horizontal: horizontal || "right",
      },
    });
  };

  const closeNotification = (notification) => {
    return snackbarProviderRef.current.closeSnackbar(notification);
  };

  return (
    <SnackbarProvider ref={snackbarProviderRef}>
      <NotificationContext.Provider
        value={{ createNotification, closeNotification, NOTIFICATION_TYPES }}
      >
        {children}
      </NotificationContext.Provider>
    </SnackbarProvider>
  );
};

export default NotificationProvider;
