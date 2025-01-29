import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from '@pages/HomePage'
import { Header } from '@organisms/Header/Header'
import { Films } from '@pages/Films'
import { Series } from '@pages/Series';

const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/films" Component={Films} />
              <Route path="/film/:movieId" Component={HomePage} />
              <Route path="/series" Component={Series} />
              <Route path="/serie/:serieId" Component={HomePage} />
              <Route path="/favorites" Component={HomePage} />
              </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  </StrictMode>,
)
