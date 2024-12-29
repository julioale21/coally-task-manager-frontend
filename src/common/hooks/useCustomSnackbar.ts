import { useSnackbar, VariantType } from "notistack";
import { useCallback } from "react";

const NOTIFICATION_DURATION = {
  SUCCESS: 3000,
  ERROR: 5000,
  WARNING: 4000,
  INFO: 3000,
} as const;

interface SnackbarOptions {
  autoHideDuration?: number;
  preventDuplicate?: boolean;
  anchorOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  };
}

type NotificationType = "success" | "error";

interface CustomSnackbar {
  showSuccess: (message: string, options?: SnackbarOptions) => void;
  showError: (message: string, options?: SnackbarOptions) => void;
}

const useCustomSnackbar = (): CustomSnackbar => {
  const { enqueueSnackbar } = useSnackbar();

  const isValidMessage = (message: string): boolean =>
    message.trim().length > 0;

  const getDefaultDuration = (type: NotificationType): number =>
    NOTIFICATION_DURATION[
      type.toUpperCase() as keyof typeof NOTIFICATION_DURATION
    ];

  const showNotification = useCallback(
    (message: string, variant: NotificationType, options?: SnackbarOptions) => {
      if (!isValidMessage(message)) return;

      enqueueSnackbar(message, {
        variant: variant as VariantType,
        autoHideDuration:
          options?.autoHideDuration ?? getDefaultDuration(variant),
        preventDuplicate: options?.preventDuplicate ?? true,
        anchorOrigin: options?.anchorOrigin ?? {
          vertical: "top",
          horizontal: "right",
        },
      });
    },
    [enqueueSnackbar]
  );

  const showSuccess = useCallback(
    (message: string, options?: SnackbarOptions) => {
      showNotification(message, "success", options);
    },
    [showNotification]
  );

  const showError = useCallback(
    (message: string, options?: SnackbarOptions) => {
      showNotification(message, "error", options);
    },
    [showNotification]
  );

  return {
    showSuccess,
    showError,
  };
};

export {
  useCustomSnackbar,
  type SnackbarOptions,
  type CustomSnackbar,
  type NotificationType,
  NOTIFICATION_DURATION,
};
