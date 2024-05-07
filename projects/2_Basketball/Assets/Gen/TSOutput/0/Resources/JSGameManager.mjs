import { JsBehaviour } from './Base/base.mjs';
class JSGameManager extends JsBehaviour {
    Start() {
        this.spawnBall();
        JSGameManager.instance = this;
    }
    Update() {
        const expectPressTimeMax = 1000;
        if (!this.pressed && (CS.UnityEngine.Input.GetMouseButtonDown(0) || CS.UnityEngine.Input.touchCount != 0)) {
            this.pressed = Date.now();
            if (CS.UnityEngine.Input.touchCount) {
                this.useTouch = true;
            }
        }
        if (this.pressed && (this.useTouch ? CS.UnityEngine.Input.touchCount == 0 : CS.UnityEngine.Input.GetMouseButtonUp(0))) {
            this.shootBall(Math.min(expectPressTimeMax, Date.now() - this.pressed) / expectPressTimeMax);
            this.pressed = 0;
        }
        //@ts-ignore
        globalThis._puerts_registry && globalThis._puerts_registry.cleanup();
    }
    shootBall(power) {
        const rigidbody = this.currentBall.GetComponent(puer.$typeof(CS.UnityEngine.Rigidbody));
        rigidbody.isKinematic = false;
        rigidbody.velocity = new CS.UnityEngine.Vector3(1 + 2 * power, 3 + 6 * power, 0);
        setTimeout(() => {
            this.spawnBall();
        }, 500);
    }
    spawnBall() {
        const ball = this.currentBall = CS.UnityEngine.Object.Instantiate(this._mb.BallPrefab);
        ball.transform.position = this._mb.BallSpawnPoint.transform.position;
        const rigidbody = ball.GetComponent(puer.$typeof(CS.UnityEngine.Rigidbody));
        rigidbody.isKinematic = true;
    }
}
export { JSGameManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSlNHYW1lTWFuYWdlci5tanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9UeXBlc2NyaXB0cy9KU0dhbWVNYW5hZ2VyLm10cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFFN0MsTUFBTSxhQUFjLFNBQVEsV0FBMkI7SUFHbkQsS0FBSztRQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBSUQsTUFBTTtRQUNGLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3ZHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN4QjtTQUNKO1FBQ0QsSUFDSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQ2xHLEVBQ0g7WUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO1FBQ0QsWUFBWTtRQUNaLFVBQVUsQ0FBQyxnQkFBZ0IsSUFBSSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekUsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ25CLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBNkIsQ0FBQztRQUNwSCxTQUFTLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM5QixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakYsVUFBVSxDQUFDLEdBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBR0QsU0FBUztRQUNMLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUE4QixDQUFDO1FBQ3BILElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFFckUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQTZCLENBQUM7UUFDeEcsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztDQUdKO0FBRUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFBIn0=sT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFBIn0=