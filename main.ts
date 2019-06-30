//% weight=0 color=#3CB371 icon="\uf0ad" block="Tools"
namespace tools {
    /**
    * 計算手臂旋轉角度，並回傳
    */
    //% blockId=“servo” block=“servo %servo %p %a %c”
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function servo(servo: number, p:number): number {
        return length*width
    }
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length*width)
    }
}
export function Servo(index: Servos, p: number, a: number, c: number): void {
        if (!initialized) {
            initPCA9685()
        }
        // 50hz: 20,000 us
        let v_us = ((degree - 90) * 20 / 3 + 1500) // 0.6 ~ 2.4
        let value = v_us * 4096 / 20000
        let d = c/20
        let b=(p-a)/d
        for (let d ; d > 0; d—) {
            a = a+b;
        }
        setPwm(index + 7, 0, a)           
    }