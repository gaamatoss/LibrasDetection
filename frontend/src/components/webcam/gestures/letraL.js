import * as fp from "fingerpose";

const letraLGesture = new fp.GestureDescription('letraL');
// thumb:
letraLGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
letraLGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.horizontalLeft, 1.0);
letraLGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.horizontalRight, 1.0);

// index:
letraLGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letraLGesture.addDirection(fp.Finger.Index,fp.FingerDirection.VerticalUp, 0.75);
letraLGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);

// middle:
letraLGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
letraLGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.2);
letraLGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);
letraLGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 0.2);

// ring:
letraLGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
letraLGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.2);
letraLGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1.0);
letraLGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalLeft, 0.2);

// pinky:
letraLGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
letraLGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.2);
letraLGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);
letraLGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
letraLGesture.setWeight(fp.Finger.Index, 2);
letraLGesture.setWeight(fp.Finger.Thumb, 2);

export default letraLGesture;
