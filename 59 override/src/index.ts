class Visibility {
  visible = true;
  setVisible(visible: boolean) {
   this.visible = visible;
  }
}
class MockVisibility extends Visibility {
  override setVisible(visible: boolean) {
   console.log(visible ? 'Shown' : 'Hidden');
 }
}
// app code
const real = new Visibility();
real.setVisible(true);
real.setVisible(false);
// test code
const mock = new MockVisibility();
mock.setVisible(true);
mock.setVisible(false);