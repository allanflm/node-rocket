import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();

  list() {
    return this.#videos.values();
  }

  create(video) {
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  }
  update(id, video) {
    this.#videos.set(id, video);
  }

  update(id) {
    this.#videos.set(id);
  }
}
