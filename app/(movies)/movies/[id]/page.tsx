import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// ⛔ 타입 선언 X – 직접 구조분해해서 타입추론 유도
export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
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

// ✅ 타입 충돌 피하기 위한 정석적인 우회 방법
export async function generateMetadata({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
  };
}
