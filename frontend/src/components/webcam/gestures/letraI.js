import * as fp from "fingerpose";
//I
const letraIGesture = new fp.GestureDescription('letraI');

// Thumb:
letraIGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.5);
letraIGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
letraIGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.5);
letraIGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.5);
letraIGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
letraIGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

// Index:
letraIGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
letraIGesture.addDirection(fp.Finger.Index,fp.FingerDirection.VerticalUp, 1.0);
letraIGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraIGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.5);

// Middle:
letraIGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
letraIGesture.addDirection(fp.Finger.Middle,fp.FingerDirection.VerticalUp, 1.0);
letraIGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraIGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.5);

// Ring:
letraIGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
letraIGesture.addDirection(fp.Finger.Ring,fp.FingerDirection.VerticalUp, 1.0);
letraIGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraIGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.5);

// Pinky:
letraIGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
letraIGesture.addDirection(fp.Finger.Pinky,fp.FingerDirection.VerticalUp, 0.75);
letraIGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.5);
letraIGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.5);

// aumentar peso nos dedos 
letraIGesture.setWeight(fp.Finger.Thumb, 1);
letraIGesture.setWeight(fp.Finger.Index, 1);
letraIGesture.setWeight(fp.Finger.Middle, 1);
letraIGesture.setWeight(fp.Finger.Ring, 1);
letraIGesture.setWeight(fp.Finger.Pinky, 1);

export default letraIGesture;