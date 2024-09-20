"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import theme from "./theme";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <LanguageProvider>{children}</LanguageProvider>
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};
