import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// ✅ generateStaticParams는 선택이지만, 타입 추론을 위해 있으면 가장 안전함
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }]; // 예시 값들
}

type ParamsProps = Awaited<ReturnType<typeof generateStaticParams>>[number];

// ✅ generateMetadata 타입 추론 맞게 적용
export async function generateMetadata({ params }: { params: ParamsProps }) {
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
  };
}

// ✅ page 컴포넌트도 동일한 타입 적용
export default async function MovieDetail({ params }: { params: ParamsProps }) {
  const { id } = params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
