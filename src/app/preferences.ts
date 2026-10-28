import { useOutletContext } from 'react-router-dom'
import type { PortfolioPreferences } from './types'

export function usePortfolioPreferences(): PortfolioPreferences {
  return useOutletContext<PortfolioPreferences>()
}
