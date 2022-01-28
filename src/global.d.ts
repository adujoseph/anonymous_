// declare module '*.jpg' {
//   export default '' as string;
// }
// declare module '*.png' {
//   export default '' as string;
// }
declare module '*.png' {
  const value: any;
  export default value;
}
