describe('Verificación de funciones', () => {
        test('Suma de dos números', () => {
            expect(1 + 1).toBe(2);
        });
    
        test('Multiplicación de dos números', () => {
            expect(2 * 3).toBe(6);
        });

        test('Suma de dos numeros', () => {
            expect(1 + 1).toBe(2);
            expect(1 + 1).not.toBe(4);
        });
    });

    describe('Probando common matchers', () => {
        test('Verificando que dos objetos son iguales', () => {
            const objeto = {nombre: "Armando"};
            objeto['edad'] = 22
            expect(objeto).toEqual({nombre:"Armando", edad: 22})
        })

        /*test('Verificando que un objeto con indefinidos sea igual', () => {
            const objeto = { nombre: "Armando", sueldo: undefined}
            expect(objeto).toStrictEqual({ nombre: "Armando"})
        })*/
    });

    describe('Verifica una variable indefinida', () => {
        const variable = undefined;

        expect(variable).not.toBeDefined();
        expect(variable).toBeUndefined();
        expect(variable).not.toBeNull();
        expect(variable).toBeFalsy();
        expect(variable).not.toBeTruthy();

        const numero = 1;
        expect(numero).not.toBeFalsy();
        expect(numero).toBeTruthy();
    });

    describe('Probando number matches', () => {
        test('Verificando numeros decimales',() => {
            const a = 5, b = 10;
            expect(a/b).toBe(0.5);
            expect(b - a).toBeGreaterThanOrEqual(a);
        })
    });

    describe('Matchers: Cadenas', () => {
        test('Probando string matchers', () => {
            const cadena = "A01424864";
            expect(cadena).toMatch(/^A[0-9]{8}$/)
        });
    });

    describe('Matchers: Arreglos e iterables', () => {
        test('verifica que un elemento se encuentra en el arreglo',() => {
            const arreglo = ["resistencia", "led","diodo","integrado"];

            expect(arreglo).toContain("led")
            expect(new Set(arreglo)).toContain("led")

            const mapa = new Map()
            mapa.set("resistencia", "4k")
            mapa.set("led", "bicolor")
            mapa.set("diodo","fotoresistencia")
            expect(mapa.has("led")).toBe(true);
        })
    });


    describe('Matchers: igualdad de referencia', () =>{
        test('Verifica que un objeto tenga la estructura correcta', () => {
            const objeto = {nombre: "Tony", edad: 20}
            
            expect(objeto).toEqual({
                nombre:expect.any(String),
                edad: expect.any(Number)
            });

            /*
                if(!body.nombre){}
            */
        });
    });

