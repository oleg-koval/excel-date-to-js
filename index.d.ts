// thanks @moltar for contribution
// https://github.com/oleg-koval/excel-date-to-js/issues/16

declare module "excel-date-to-js" {
  export function getJsDateFromExcel(excelDate: string | number): Date
  export function getExcelDateFromJs(date: Date): number
}
