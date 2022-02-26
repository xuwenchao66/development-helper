import { Routes, Route, Navigate } from 'react-router-dom'
import JsonParser from '@/pages/JsonParse'
import StringTransformer from '@/pages/StringTransform'
import { ROUTE_PATHS } from '@/constants'

const Router = () => (
  <Routes>
    <Route path={ROUTE_PATHS.JsonParse} element={<JsonParser />} />
    <Route path={ROUTE_PATHS.StringTransform} element={<StringTransformer />} />
    <Route path="*" element={<Navigate to={ROUTE_PATHS.JsonParse} replace />} />
  </Routes>
)

export default Router
