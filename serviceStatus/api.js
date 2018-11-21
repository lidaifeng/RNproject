/**
 * 服务情况api
 */
import { GET, POST } from 'localRequest';

export function queryServiceFall20181121(): Promise<Object> {
  const url = '/crm/serviceFall/v1/queryServiceFall';
  return GET(url);
}

