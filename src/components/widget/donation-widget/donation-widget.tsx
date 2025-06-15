export function DonateWidget() {
  return (
    <>
      {/* @ts-expect-error React is having trouble recognizing this as a JSX element */}
      <givebutter-widget
        id="j2XRAg"
        widget-type="form"
        embed="true"
        color="#2563eb"
        button-style="rounded"
        className="donation-widget"
      />
    </>
  );
}
