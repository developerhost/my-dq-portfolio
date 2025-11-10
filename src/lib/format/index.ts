import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

/**
 * 参画期間をフォーマットする
 */
export const formatPeriod = (start?: string, end?: string): string => {
  if (!start && !end) return '';

  const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), 'yyyy年M月', { locale: ja });
  };

  if (start && end) {
    return `${formatDate(start)} ~ ${formatDate(end)}`;
  } else if (start) {
    return `${formatDate(start)} ~`;
  }

  return '';
};
