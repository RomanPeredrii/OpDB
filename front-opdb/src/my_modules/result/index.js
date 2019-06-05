
export default class Result {
        constructor(fet4) {
          return (async () => {
            try {
              const rawResponse = await fet4;
              this.result = await rawResponse.json();
            } catch (err) {
              this.result = {};
              this.result.err = err;
            }
            return this
          })();

        }
        stat() {
          // for log file
        };
        ok(clb) {
          (this.result.ok && !this.result.admin) ? clb() : this.stat();
          return this
        }
        admin(clb) {
          (this.result.ok && this.result.admin) ? clb() : this.stat();
          return this
        }
        data(clb) {
          this.result.data ? clb(this.result.data) : this.stat();
          return this
        }
        error(clb) {
          (this.result.err) ? clb(this.result.err) : this.stat();
          return this
        }
      }
