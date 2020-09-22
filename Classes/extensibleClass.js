class Extensible {
    id;

    constructor() {
        Extensible.prototype.id = Extensible.prototype.id === undefined ? 0 : Number(Extensible.prototype.id) + 1;
        this.id = Extensible.prototype.id;
    };

    extend(template) {
        Object.entries(template).forEach(([key, value]) => {
            if (typeof value === 'function') {
                Extensible.prototype[key] = value;
            } else {
                this[key] = value;
            }
        })
    }
};

