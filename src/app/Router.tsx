import { Routes, Route, Navigate } from 'react-router-dom'
import JsonParser from '@/pages/JsonParser'
import StringTransformer from '@/pages/StringTransformer'
import { ROUTE_PATHS } from '@/constants'

const Router = () => (
  <Routes>
    <Route path={ROUTE_PATHS.JsonParser} element={<JsonParser />} />
    <Route
      path={ROUTE_PATHS.StringTransformer}
      element={<StringTransformer />}
    />
    <Route
      path="*"
      element={<Navigate to={ROUTE_PATHS.JsonParser} replace />}
    />
  </Routes>
)

export default Router
