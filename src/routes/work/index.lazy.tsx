import { useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';
import {
  createLazyFileRoute,
  Link,
  useNavigate,
  useSearch,
} from '@tanstack/react-router';

import { getWorks } from './-utils/workData';

import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { formatPeriod } from '@/lib/format';

const ITEMS_PER_PAGE = 6;

export const WorkList = () => {
  const navigate = useNavigate();
  const searchParams = useSearch({ from: '/work/' }) as {
    category?: string;
    library?: string;
    page?: number;
  };
  const page =
    typeof searchParams.page === 'number' && searchParams.page > 0
      ? searchParams.page
      : 1;
  const selectedCategory = searchParams.category || 'all';
  const selectedLibrary = searchParams.library || 'all';

  const { data, error, isLoading } = useQuery({
    queryFn: getWorks,
    queryKey: ['works'],
  });

  // work.startでソート（新しい順）
  const sortedWorks = useMemo(() => {
    const allWorks = data?.contents || [];
    return [...allWorks].sort((a, b) => {
      if (!a.start && !b.start) return 0;
      if (!a.start) return 1;
      if (!b.start) return -1;
      return new Date(b.start).getTime() - new Date(a.start).getTime();
    });
  }, [data?.contents]);

  // ユニークなカテゴリーとライブラリのリストを取得
  const uniqueCategories = useMemo(() => {
    const categories = new Set<string>();
    sortedWorks.forEach((work) => {
      work.category?.forEach((cat) => categories.add(cat));
    });
    return Array.from(categories).sort();
  }, [sortedWorks]);

  const uniqueLibraries = useMemo(() => {
    const libraries = new Set<string>();
    sortedWorks.forEach((work) => {
      work.libraries?.forEach((lib) => libraries.add(lib));
    });
    return Array.from(libraries).sort();
  }, [sortedWorks]);

  // フィルタリング
  const filteredWorks = useMemo(() => {
    return sortedWorks.filter((work) => {
      const categoryMatch =
        selectedCategory === 'all' || work.category?.includes(selectedCategory);
      const libraryMatch =
        selectedLibrary === 'all' || work.libraries?.includes(selectedLibrary);
      return categoryMatch && libraryMatch;
    });
  }, [sortedWorks, selectedCategory, selectedLibrary]);

  // ページネーション計算
  const totalPages = Math.ceil(filteredWorks.length / ITEMS_PER_PAGE);
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const works = filteredWorks.slice(startIndex, endIndex);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-lg">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-lg text-red-500">
            エラーが発生しました: {error.message}
          </p>
        </div>
      </div>
    );
  }

  // ページ変更ハンドラー
  const handlePageChange = (newPage: number) => {
    navigate({
      to: '/work',
      search: {
        page: newPage,
        category: selectedCategory !== 'all' ? selectedCategory : undefined,
        library: selectedLibrary !== 'all' ? selectedLibrary : undefined,
      },
    });
  };

  // フィルター変更ハンドラー
  const handleCategoryChange = (value: string) => {
    navigate({
      to: '/work',
      search: {
        page: 1, // フィルター変更時は1ページ目に戻る
        category: value !== 'all' ? value : undefined,
        library: selectedLibrary !== 'all' ? selectedLibrary : undefined,
      },
    });
  };

  const handleLibraryChange = (value: string) => {
    navigate({
      to: '/work',
      search: {
        page: 1, // フィルター変更時は1ページ目に戻る
        category: selectedCategory !== 'all' ? selectedCategory : undefined,
        library: value !== 'all' ? value : undefined,
      },
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex gap-4 mb-6">
        <h1 className="text-3xl font-bold">実績一覧</h1>
        <p>今までのお仕事の実績や自主制作アプリ</p>
      </div>

      {/* フィルター */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* カテゴリーフィルター */}
        <div className="flex-1">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="category-select"
          >
            カテゴリー
          </label>
          <Select onValueChange={handleCategoryChange} value={selectedCategory}>
            <SelectTrigger className="w-full" id="category-select">
              <SelectValue placeholder="全て" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全て</SelectItem>
              {uniqueCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* ライブラリフィルター */}
        <div className="flex-1">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="library-select"
          >
            ライブラリ/フレームワーク
          </label>
          <Select onValueChange={handleLibraryChange} value={selectedLibrary}>
            <SelectTrigger className="w-full" id="library-select">
              <SelectValue placeholder="全て" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全て</SelectItem>
              {uniqueLibraries.map((library) => (
                <SelectItem key={library} value={library}>
                  {library}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {works.length === 0 ? (
        <p className="text-gray-500">
          {selectedCategory !== 'all' || selectedLibrary !== 'all'
            ? '条件に合う実績が見つかりませんでした。'
            : '実績がまだありません。'}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <Link
              className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              key={work.id}
              params={{ id: work.id }}
              to="/work/$id"
            >
              {/* アイキャッチ画像 */}
              {work.eyecatch && (
                <div className="aspect-video w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={work.eyecatch.url}
                  />
                </div>
              )}

              <div className="p-4">
                {/* タイトル */}
                <h2 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
                  {work.title}
                </h2>

                {/* 参画期間 / 公開日 */}
                {(work.start || work.end) && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {work.end ? '参画期間' : '公開日'}{' '}
                    {formatPeriod(work.start, work.end)}
                  </p>
                )}

                {/* タグセクション */}
                <div className="space-y-2">
                  {/* カテゴリー */}
                  {work.category && work.category.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {work.category.map((cat, index) => (
                        <Badge key={index} variant="default">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* 言語 */}
                  {work.languages && work.languages.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {work.languages.map((lang, index) => (
                        <Badge key={index} variant="default">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* ライブラリ */}
                  {work.libraries && work.libraries.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {work.libraries.map((lib, index) => (
                        <Badge key={index} variant="default">
                          {lib}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* サーバー */}
                  {work.server && work.server.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {work.server.map((srv, index) => (
                        <Badge key={index} variant="default">
                          {srv}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* ツール */}
                  {work.tools && work.tools.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {work.tools.map((tool, index) => (
                        <Badge key={index} variant="default">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              {/* 前へボタン */}
              <PaginationItem>
                <PaginationPrevious
                  className={
                    currentPage === 1
                      ? 'pointer-events-none opacity-50'
                      : 'cursor-pointer'
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) {
                      handlePageChange(currentPage - 1);
                    }
                  }}
                />
              </PaginationItem>

              {/* ページ番号 */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      className="cursor-pointer"
                      isActive={pageNum === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(pageNum);
                      }}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              {/* 次へボタン */}
              <PaginationItem>
                <PaginationNext
                  className={
                    currentPage === totalPages
                      ? 'pointer-events-none opacity-50'
                      : 'cursor-pointer'
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      handlePageChange(currentPage + 1);
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {/* 総件数 */}
      <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
        <p>
          {selectedCategory !== 'all' || selectedLibrary !== 'all'
            ? `フィルター結果: ${filteredWorks.length} 件`
            : `全 ${filteredWorks.length} 件`}{' '}
          {totalPages > 0 && `(ページ ${currentPage} / ${totalPages})`}
        </p>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/work/')({
  component: WorkList,
});
