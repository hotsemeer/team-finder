import { DateTime } from 'luxon';

export default function (value: Date | string | number, format: string | undefined): string {
  return 'few seconds ago'
  // const date = DateTime().f;

  // if (!date.isValid()) return '.'

  // if (format) {
  //   return date.format(format)
  // }

  // const hourAgo = dayjs().subtract(1, 'hour')
  // if (date.isAfter(hourAgo)) {
  //   return date.fromNow()
  // }

  // const weekAgo = dayjs().subtract(6, 'week')
  // if (date.isBefore(weekAgo)) {
  //   return date.format('LL')
  // }

  // return date.calendar()
}
