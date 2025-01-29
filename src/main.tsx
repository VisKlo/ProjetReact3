import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@pages/HomePage'
import { Header } from '@organisms/Header/Header'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/films" Component={HomePage} />
            <Route path="/film/:movieId" Component={HomePage} />
            <Route path="/series" Component={HomePage} />
            <Route path="/serie/:serieId" Component={HomePage} />
            <Route path="/favorites" Component={HomePage} />
            </Routes>
      </BrowserRouter>
  </StrictMode>,
)
