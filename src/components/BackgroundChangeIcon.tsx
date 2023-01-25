export const BackgroundChangeIcon = ({
  height = '12px',
  width = '12px',
  color = 'black',
  children,
}: React.SVGProps<SVGSVGElement>) => (
  <div
    className="h-10 w-10 border-1"
    style={{
      background: `linear-gradient(to right bottom, #3445d9, #8357dc) fixed`,
    }}
  >
    {children}
  </div>
);
