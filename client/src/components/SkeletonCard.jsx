export default function SkeletonCard() {
  return (
    <div className="card skeleton-card" aria-hidden="true">
      <div className="skeleton-img skeleton-shimmer" />
      <div className="card-body">
        <div className="row-between">
          <div className="skeleton-line skeleton-shimmer" style={{ width: '35%', height: '18px', borderRadius: '999px' }} />
          <div className="skeleton-line skeleton-shimmer" style={{ width: '25%', height: '14px' }} />
        </div>
        <div className="skeleton-line skeleton-shimmer" style={{ width: '80%', height: '18px', margin: '4px 0' }} />
        <div className="skeleton-line skeleton-shimmer" style={{ width: '45%', height: '14px' }} />
        <div className="skeleton-line skeleton-shimmer" style={{ width: '40%', height: '16px', marginTop: '4px' }} />
      </div>
    </div>
  );
}
