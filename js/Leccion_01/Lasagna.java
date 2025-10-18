public class Lasagna {

    private final static int  MAX_HOUR = 40;

    public Lasagna(){}

    public static int getMAX_HOUR(){
        return Lasagna.MAX_HOUR;
    }
    
    public static int realTimeCook(int a){
        return getMAX_HOUR() - a;
    }

    public static int layersTime(int a){
        return a * 2;
    }

    public static int totalTimeCook(int layer, int realTime){
         int layers = layersTime(layer);
         int realTimeCooking = realTimeCook(realTime);

        return layers + realTimeCooking;

    }

    public static void main(String[] args) {
        
        System.out.println(totalTimeCook(3, 30));
    }
}
