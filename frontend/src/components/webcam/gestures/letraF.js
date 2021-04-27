import * as fp from "fingerpose";
//F
const letraFGesture = new fp.GestureDescription('letraF');

// Thumb:
letraFGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.5);
letraFGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
letraFGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.5);
letraFGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.5);
letraFGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
letraFGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

// Index:
letraFGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
letraFGesture.addDirection(fp.Finger.Index,fp.FingerDirection.VerticalUp, 1.0);
letraFGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraFGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.5);

// Middle:
letraFGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
letraFGesture.addDirection(fp.Finger.Middle,fp.FingerDirection.VerticalUp, 0.75);
letraFGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraFGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.5);

// Ring:
letraFGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
letraFGesture.addDirection(fp.Finger.Ring,fp.FingerDirection.VerticalUp, 0.75);
letraFGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraFGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.5);

// Pinky:
letraFGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
letraFGesture.addDirection(fp.Finger.Pinky,fp.FingerDirection.VerticalUp, 0.75);
letraFGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraFGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.5);

// aumentar peso nos dedos 
letraFGesture.setWeight(fp.Finger.Thumb, 1);
letraFGesture.setWeight(fp.Finger.Index, 1);
letraFGesture.setWeight(fp.Finger.Middle, 1);
letraFGesture.setWeight(fp.Finger.Ring, 1);
letraFGesture.setWeight(fp.Finger.Pinky, 1);

export default letraFGesture;