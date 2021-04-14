export class Disposible {
  isDisposed = false;
  dispose() {
    this.isDisposed = true;
    this.log('disposed');
  }
  log(message: string) {
    console.log(message);
  }
}

export class File extends Disposible {
  write(contents: string) {
    // ... write to file
  }
}