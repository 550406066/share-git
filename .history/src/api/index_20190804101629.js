export async function getApp(appID: string): Promise<IGetAppInfo> {
  return axiosRequest(Methods.get, `/app/${appID}`);
}