import Image from "next/image";
import { customerReviews, realWorks } from "@/config/media";
export function CustomerProof() {
  if (!customerReviews.length && !realWorks.length) return null;
  return (
    <section className="customer-proof section-space">
      <div className="wrap">
        {realWorks.length > 0 && (
          <>
            <h2>Últimos trabalhos</h2>
            <div className="work-grid">
              {realWorks.map((work) => (
                <figure key={work.src}>
                  <Image
                    src={work.src}
                    alt={work.alt}
                    width={800}
                    height={600}
                  />
                  <figcaption>{work.service}</figcaption>
                </figure>
              ))}
            </div>
          </>
        )}
        {customerReviews.length > 0 && (
          <>
            <h2>Quem já passou por aqui</h2>
            <div className="review-grid">
              {customerReviews.map((review) => (
                <blockquote key={`${review.name}-${review.sourceUrl}`}>
                  <p>{review.text}</p>
                  <footer>
                    {review.name}{" "}
                    <a
                      href={review.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver avaliação original
                    </a>
                  </footer>
                </blockquote>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
