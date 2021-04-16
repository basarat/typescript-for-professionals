// All the CSSProperties
type CSSProperties = {
  color?: string,
  backgroundColor?: string,
  width?: number,
  height?: number,
  // ... lots more
};

function setSize(
  element: HTMLElement,
  // Usage: Just need the size properties
  size: Pick<CSSProperties, 'width' | 'height'>
) {
  element.setAttribute('width', (size.width ?? 0) + 'px');
  element.setAttribute('height', (size.height ?? 0) + 'px');
}