import * as Tone from "tone";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Piano } from "lucide-react";
import { ModeToggle } from "./components/mode-toggle";

interface MouseEventWithTarget extends React.MouseEvent<HTMLButtonElement> {
  target: EventTarget & {
    innerText: string;
  };
}

function Desktop() {
  const [noteValue, setNoteValue] = useState("");
  const [chordValue, setChordValue] = useState("");
  const [whichChord, setWhichChord] = useState("");
  const [chordNotes, setChordNotes] = useState("");
  const [activeChord, setActiveChord] = useState("");

  const updateNoteValue = (e: MouseEventWithTarget) => {
    setNoteValue(e.target.innerText);
  };

  const updateChordValue = (e: MouseEventWithTarget) => {
    setChordValue(e.target.innerText);
  };

  const playChord = (button: string) => {
    // Synth engine
    const synth = new Tone.PolySynth().toDestination();
    setActiveChord(button);

    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN C

    if (noteValue === "C" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C3", "D#3", "G3", "A#3"], "4n");
        setWhichChord("C minor 7th");
        setChordNotes("C - D# - G - A#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C3", "E3", "G3", "B3"], "4n");
        setWhichChord("C major 7th");
        setChordNotes("C - E - G - B");
      }
    }

    if (noteValue === "C" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D3", "F3", "G#3", "C4"], "4n");
        setWhichChord("D half-diminished 7th");
        setChordNotes("D - F - G# - C");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D3", "F3", "A3", "C4"], "4n");
        setWhichChord("D minor 7th");
        setChordNotes("D - F - A - C");
      }
    }

    if (noteValue === "C" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D#3", "G3", "A#3", "D4"], "4n");
        setWhichChord("D# major 7th");
        setChordNotes("D# - G - A# - D");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["E3", "G3", "B3", "D4"], "4n");
        setWhichChord("E minor 7th");
        setChordNotes("E - G - B - D");
      }
    }

    if (noteValue === "C" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F3", "G#3", "C4", "D#4"], "4n");
        setWhichChord("F minor 7th");
        setChordNotes("F - G# - C - D#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F3", "A3", "C4", "E4"], "4n");
        setWhichChord("F major 7th");
        setChordNotes("F - A - C - E");
      }
    }

    if (noteValue === "C" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
        setWhichChord("G minor 7th");
        setChordNotes("G - A# - D - F");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G3", "B3", "D4", "F4"], "4n");
        setWhichChord("G dominant 7th");
        setChordNotes("G - B - D - F");
      }
    }

    if (noteValue === "C" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G#3", "C4", "D#4", "G4"], "4n");
        setWhichChord("G# major 7th");
        setChordNotes("A♭ - C - D# - G");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
        setWhichChord("A minor 7th");
        setChordNotes("A - C - E - G");
      }
    }

    if (noteValue === "C" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A#3", "D4", "F4", "G#4"], "4n");
        setWhichChord("A# dominant 7th");
        setChordNotes("A# - D - F - G#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["B3", "D4", "F4", "A4"], "4n");
        setWhichChord("B half-diminished 7th");
        setChordNotes("B - D - F - A");
      }
    }

    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN C#/Db

    // handle C# chord 1 both
    if (noteValue === "C#/Db" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C#3", "E3", "G#3", "B3"], "4n");
        setWhichChord("C# minor 7th");
        setChordNotes("C# - E - G# - B");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C#3", "F3", "G#3", "C4"], "4n");
        setWhichChord("C# major 7th");
        setChordNotes("C# - F - G# - C");
      }
    }

    // handle C# chord 2
    if (noteValue === "C#/Db" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D#3", "F#3", "A3", "C#4"], "4n");
        setWhichChord("D# half-diminished 7th");
        setChordNotes("D# - F# - A - C#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D#3", "F#3", "A#3", "C#4"], "4n");
        setWhichChord("D# minor 7th");
        setChordNotes("D# - F# - A# - C#");
      }
    }

    // handle C# chord 3
    if (noteValue === "C#/Db" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["E3", "G#3", "B3", "D#4"], "4n");
        setWhichChord("E major 7th");
        setChordNotes("E - G# - B - D#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F3", "G#3", "C4", "D#4"], "4n");
        setWhichChord("E# minor 7th");
        setChordNotes("F - G# - C - D#");
      }
    }

    // handle C# chord 4
    if (noteValue === "C#/Db" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
        setWhichChord("F# minor 7th");
        setChordNotes("F# - A - C# - E");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F#3", "A#3", "C#4", "F4"], "4n");
        setWhichChord("F# major 7th");
        setChordNotes("F# - A# - C# - F");
      }
    }

    // handle C# chord 5
    if (noteValue === "C#/Db" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
        setWhichChord("G# minor 7th");
        setChordNotes("G# - B - D# - F#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G#3", "C4", "D#4", "F#4"], "4n");
        setWhichChord("G# dominant 7th");
        setChordNotes("G# - C - D# - F#");
      }
    }

    // handle C# chord 6
    if (noteValue === "C#/Db" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A3", "C#4", "E4", "G#4"], "4n");
        setWhichChord("A major 7th");
        setChordNotes("A - C# - E - G#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
        setWhichChord("A# minor 7th");
        setChordNotes("A# - C# - F - G#");
      }
    }

    // handle C# chord 7
    if (noteValue === "C#/Db" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["B4", "D#4", "F#4", "A4"], "4n");
        setWhichChord("B dominant 7th");
        setChordNotes("B - D# - F# - A");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C4", "D#4", "F#4", "A#4"], "4n");
        setWhichChord("B# half-diminished 7th");
        setChordNotes("C - D# - F# - A#");
      }
    }

    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN D

    // handle chord 1 both
    if (noteValue === "D" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D3", "F3", "A3", "C4"], "4n");
        setWhichChord("D minor 7th");
        setChordNotes("D - F - A - C");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D3", "F#3", "A3", "C#4"], "4n");
        setWhichChord("D major 7th");
        setChordNotes("D - F# - A# - C#");
      }
    }

    // handle D chord 2
    if (noteValue === "D" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["E3", "G3", "A#3", "D4"], "4n");
        setWhichChord("E half-diminished 7th");
        setChordNotes("E - G - A# - D");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["E3", "G3", "B3", "D4"], "4n");
        setWhichChord("E minor 7th");
        setChordNotes("E - G - B - D");
      }
    }

    // handle D chord 3
    if (noteValue === "D" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F3", "A3", "C4", "E4"], "4n");
        setWhichChord("F major 7th");
        setChordNotes("F - A - C - E");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
        setWhichChord("F# minor 7th");
        setChordNotes("F# - A - C# - E");
      }
    }

    // handle D chord 4
    if (noteValue === "D" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
        setWhichChord("G minor 7th");
        setChordNotes("G - A# - D - F");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G3", "B3", "D4", "F#4"], "4n");
        setWhichChord("G major 7th");
        setChordNotes("G - B - D - F#");
      }
    }

    // handle D chord 5
    if (noteValue === "D" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
        setWhichChord("A minor 7th");
        setChordNotes("A - C - E - G");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A3", "C#4", "E4", "G4"], "4n");
        setWhichChord("A dominant 7th");
        setChordNotes("A - C# - E - G");
      }
    }

    // handle D chord 6
    if (noteValue === "D" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A#3", "D4", "F4", "A4"], "4n");
        setWhichChord("Bb major 7th");
        setChordNotes("A# - D - F - A");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
        setWhichChord("B minor 7th");
        setChordNotes("B - D - F# - A");
      }
    }

    // handle D chord 7
    if (noteValue === "D" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C4", "E4", "G4", "A#4"], "4n");
        setWhichChord("C dominant 7th");
        setChordNotes("C - E - G - A#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C#4", "E4", "G4", "B4"], "4n");
        setWhichChord("C# half-diminished 7th");
        setChordNotes("C# - E - G - B");
      }
    }

    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN D#/Eb

    // handle D#/Eb chord 1
    if (noteValue === "D#/Eb" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D#3", "F#3", "A#3", "C#4"], "4n");
        setWhichChord("D# minor 7th");
        setChordNotes("D# - F# - A# - C#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D#3", "G3", "A#3", "D4"], "4n");
        setWhichChord("D# major 7th");
        setChordNotes("D# - G - A# - D");
      }
    }

    // handle D#/Eb chord 2
    if (noteValue === "D#/Eb" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F3", "G#3", "B3", "D#4"], "4n");
        setWhichChord("E# half-diminished 7th");
        setChordNotes("E# - G# - B - D#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F3", "G#3", "C4", "D#4"], "4n");
        setWhichChord("E# minor 7th");
        setChordNotes("F - G# - C - D#");
      }
    }

    // handle D#/Eb chord 3
    if (noteValue === "D#/Eb" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F#3", "A#3", "C#4", "F4"], "4n");
        setWhichChord("F# major 7th");
        setChordNotes("F# - A# - C# - F");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
        setWhichChord("F## minor 7th");
        setChordNotes("G - A# - D - F");
      }
    }

    // handle D#/Eb chord 4
    if (noteValue === "D#/Eb" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
        setWhichChord("G# minor 7th");
        setChordNotes("G# - B - D# - F#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G#3", "C4", "D#4", "G4"], "4n");
        setWhichChord("G# major 7th");
        setChordNotes("G# - C - D# - G");
      }
    }

    // handle D#/Eb chord 5
    if (noteValue === "D#/Eb" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
        setWhichChord("A# minor 7th");
        setChordNotes("A# - C# - F - G#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A#3", "D4", "F4", "G#4"], "4n");
        setWhichChord("A# dominant 7th");
        setChordNotes("A# - D - F - G#");
      }
    }

    // handle D#/Eb chord 6
    if (noteValue === "D#/Eb" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["B3", "D#4", "F#4", "A#4"], "4n");
        setWhichChord("B major 7th");
        setChordNotes("B - D# - F# - A#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C4", "D#4", "G4", "A#4"], "4n");
        setWhichChord("B# minor 7th");
        setChordNotes("C - D# - G - A#");
      }
    }

    // handle D#/Eb chord 7
    if (noteValue === "D#/Eb" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C#4", "F4", "G#4", "B4"], "4n");
        setWhichChord("C# dominant 7th");
        setChordNotes("C# - F - G# - B");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D4", "F4", "G#4", "C5"], "4n");
        setWhichChord("C## half-diminished 7th");
        setChordNotes("D - F - G# - C");
      }
    }

    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN E

    // handle E chord 1
    if (noteValue === "E" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["E3", "G3", "B3", "D4"], "4n");
        setWhichChord("E minor 7th");
        setChordNotes("E - G - B - D");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["E3", "G#3", "B3", "D#4"], "4n");
        setWhichChord("E major 7th");
        setChordNotes("E - G# - B - D#");
      }
    }

    // handle E chord 2
    if (noteValue === "E" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F#3", "A3", "C4", "E4"], "4n");
        setWhichChord("F# half-diminished 7th");
        setChordNotes("F# - A - C - E");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
        setWhichChord("F# minor 7th");
        setChordNotes("F# - A - C# - E");
      }
    }

    // handle E chord 3
    if (noteValue === "E" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G3", "B3", "D4", "F#4"], "4n");
        setWhichChord("G major 7th");
        setChordNotes("G - B - D - F#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
        setWhichChord("G# minor 7th");
        setChordNotes("G# - B - D# - F#");
      }
    }

    // handle E chord 4
    if (noteValue === "E" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
        setWhichChord("A minor 7th");
        setChordNotes("A - C - E - G");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A3", "C#4", "E4", "G#4"], "4n");
        setWhichChord("A major 7th");
        setChordNotes("A - C# - E - G#");
      }
    }

    // handle E chord 5
    if (noteValue === "E" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
        setWhichChord("B minor 7th");
        setChordNotes("B - D - F# - A");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["B3", "D#4", "F#4", "A4"], "4n");
        setWhichChord("B dominant 7th");
        setChordNotes("B - D# - F# - A");
      }
    }

    // handle E chord 6
    if (noteValue === "E" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "4n");
        setWhichChord("C major 7th");
        setChordNotes("C - E - G - B");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C#4", "E4", "G#4", "B4"], "4n");
        setWhichChord("C# minor 7th");
        setChordNotes("C# - E - G# - B");
      }
    }

    // handle E chord 7
    if (noteValue === "E" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D4", "F#4", "A4", "C5"], "4n");
        setWhichChord("D dominant 7th");
        setChordNotes("D - F# - A - C");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D#4", "F#4", "A4", "C#5"], "4n");
        setWhichChord("D# half-diminished 7th");
        setChordNotes("D# - F# - A - C#");
      }
    }
    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN F

    // handle F chord 1
    if (noteValue === "F" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F3", "G#3", "C4", "D#4"], "4n");
        setWhichChord("F minor 7th");
        setChordNotes("F - G# - C - D#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F3", "A3", "C4", "E4"], "4n");
        setWhichChord("F major 7th");
        setChordNotes("F - A - C - E");
      }
    }

    // handle F chord 2
    if (noteValue === "F" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G3", "A#3", "C#4", "F4"], "4n");
        setWhichChord("G half-diminished 7th");
        setChordNotes("G - A# - C# - F");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
        setWhichChord("G minor 7th");
        setChordNotes("G - A# - D - F");
      }
    }

    // handle F chord 3
    if (noteValue === "F" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G#3", "C4", "D#4", "G4"], "4n");
        setWhichChord("Ab major 7th");
        setChordNotes("G# - C - D# - G");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
        setWhichChord("A minor 7th");
        setChordNotes("A - C - E - G");
      }
    }

    // handle F chord 4
    if (noteValue === "F" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
        setWhichChord("Bb minor 7th");
        setChordNotes("Bb - C# - F - G#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A#3", "D4", "F4", "A4"], "4n");
        setWhichChord("Bb major 7th");
        setChordNotes("Bb - D - F - A");
      }
    }

    // handle F chord 5
    if (noteValue === "F" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C4", "D#4", "G4", "A#4"], "4n");
        setWhichChord("C minor 7th");
        setChordNotes("C - D# - G - A#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C4", "E4", "G4", "A#4"], "4n");
        setWhichChord("C dominant 7th");
        setChordNotes("C - E - G - A#");
      }
    }

    // handle F chord 6
    if (noteValue === "F" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C#4", "F4", "G#4", "C5"], "4n");
        setWhichChord("Db major 7th");
        setChordNotes("Db - F - Ab - C");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D4", "F4", "A4", "C5"], "4n");
        setWhichChord("D minor 7th");
        setChordNotes("D - F - A - C");
      }
    }

    // handle F chord 7
    if (noteValue === "F" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D#4", "G4", "A#4", "C#5"], "4n");
        setWhichChord("Eb dominant 7th");
        setChordNotes("Eb - G - A# - C#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["E4", "G4", "A#4", "D5"], "4n");
        setWhichChord("E half-diminished 7th");
        setChordNotes("E - G - A# - D");
      }
    }

    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN F#/Gb

    // handle F#/Gb chord 1
    if (noteValue === "F#/Gb" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
        setWhichChord("F# minor 7th");
        setChordNotes("F# - A - C# - E");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F#3", "A#3", "C#4", "F4"], "4n");
        setWhichChord("F# major 7th");
        setChordNotes("F# - A# - C# - F");
      }
    }

    // handle F#/Gb chord 2
    if (noteValue === "F#/Gb" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G#3", "B3", "D4", "F#4"], "4n");
        setWhichChord("G# half-diminished 7th");
        setChordNotes("G# - B - D - F#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
        setWhichChord("G# minor 7th");
        setChordNotes("G# - B - D# - F#");
      }
    }

    // handle F#/Gb chord 3
    if (noteValue === "F#/Gb" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A3", "C#4", "E4", "G#4"], "4n");
        setWhichChord("A major 7th");
        setChordNotes("A - C# - E - G#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
        setWhichChord("A# minor 7th");
        setChordNotes("A# - C# - F - G#");
      }
    }

    // handle F#/Gb chord 4
    if (noteValue === "F#/Gb" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
        setWhichChord("B minor 7th");
        setChordNotes("B - D - F# - A");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["B3", "D#4", "F#4", "A#4"], "4n");
        setWhichChord("B major 7th");
        setChordNotes("B - D# - F# - A#");
      }
    }

    // handle F#/Gb chord 5
    if (noteValue === "F#/Gb" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C#4", "E4", "G#4", "B4"], "4n");
        setWhichChord("C# minor 7th");
        setChordNotes("C# - E - G# - B");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C#4", "F4", "G#4", "B4"], "4n");
        setWhichChord("C# dominant 7th");
        setChordNotes("C# - F - G# - B");
      }
    }

    // handle F#/Gb chord 6
    if (noteValue === "F#/Gb" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D4", "F#4", "A4", "C#5"], "4n");
        setWhichChord("D major 7th");
        setChordNotes("D - F# - A - C#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D#4", "F#4", "A#4", "C#5"], "4n");
        setWhichChord("D# minor 7th");
        setChordNotes("D# - F# - A# - C#");
      }
    }

    // handle F#/Gb chord 7
    if (noteValue === "F#/Gb" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["E4", "G#4", "B4", "D5"], "4n");
        setWhichChord("E dominant 7th");
        setChordNotes("E - G# - B - D");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F4", "G#4", "B4", "D#5"], "4n");
        setWhichChord("E# half-diminished 7th");
        setChordNotes("E# - G# - B - D#");
      }
    }

    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN G

    // handle G chord 1
    if (noteValue === "G" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
        setWhichChord("G minor 7th");
        setChordNotes("G - A# - D - F");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G3", "B3", "D4", "F#4"], "4n");
        setWhichChord("G major 7th");
        setChordNotes("G - B - D - F#");
      }
    }

    // handle G chord 2
    if (noteValue === "G" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A3", "C4", "D#4", "G4"], "4n");
        setWhichChord("A half-diminished 7th");
        setChordNotes("A - C - D# - G");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
        setWhichChord("A minor 7th");
        setChordNotes("A - C - E - G");
      }
    }

    // handle G chord 3
    if (noteValue === "G" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A#3", "D4", "F4", "A4"], "4n");
        setWhichChord("Bb major 7th");
        setChordNotes("Bb - D - F - A");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
        setWhichChord("A# minor 7th");
        setChordNotes("A# - C# - F - G#");
      }
    }

    // handle G chord 4
    if (noteValue === "G" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C4", "D#4", "G4", "A#4"], "4n");
        setWhichChord("C minor 7th");
        setChordNotes("C - D# - G - A#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "4n");
        setWhichChord("C major 7th");
        setChordNotes("C - E - G - B");
      }
    }

    // handle G chord 5
    if (noteValue === "G" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D4", "F4", "A4", "C5"], "4n");
        setWhichChord("D minor 7th");
        setChordNotes("D - F - A - C");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D4", "F#4", "A4", "C5"], "4n");
        setWhichChord("D dominant 7th");
        setChordNotes("D - F# - A - C");
      }
    }

    // handle G chord 6
    if (noteValue === "G" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D#4", "G4", "A#4", "D5"], "4n");
        setWhichChord("Eb major 7th");
        setChordNotes("Eb - G - A# - D");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["E4", "G4", "B4", "D5"], "4n");
        setWhichChord("E minor 7th");
        setChordNotes("E - G - B - D");
      }
    }

    // handle G chord 7
    if (noteValue === "G" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F4", "A4", "C5", "D#5"], "4n");
        setWhichChord("F dominant 7th");
        setChordNotes("F - A - C - D#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F#4", "A4", "C5", "E5"], "4n");
        setWhichChord("F# half-diminished 7th");
        setChordNotes("F# - A - C - E");
      }
    }

    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN G#/Ab

    // handle G#/Ab chord 1
    if (noteValue === "G#/Ab" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
        setWhichChord("G# minor 7th");
        setChordNotes("G# - B - D# - F#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G#3", "C4", "D#4", "G4"], "4n");
        setWhichChord("G# major 7th");
        setChordNotes("G# - C - D# - G");
      }
    }

    // handle G#/Ab chord 2
    if (noteValue === "G#/Ab" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A#3", "C#4", "E4", "G#4"], "4n");
        setWhichChord("A# half-diminished 7th");
        setChordNotes("A# - C# - E - G#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
        setWhichChord("A# minor 7th");
        setChordNotes("A# - C# - F - G#");
      }
    }

    // handle G#/Ab chord 3
    if (noteValue === "G#/Ab" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["B3", "D#4", "F#4", "A#4"], "4n");
        setWhichChord("B major 7th");
        setChordNotes("B - D# - F# - A#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C4", "D#4", "G4", "A#4"], "4n");
        setWhichChord("B# minor 7th");
        setChordNotes("B# - D# - G - A#");
      }
    }

    // handle G#/Ab chord 4
    if (noteValue === "G#/Ab" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C#4", "E4", "G#4", "B4"], "4n");
        setWhichChord("C# minor 7th");
        setChordNotes("C# - E - G# - B");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C#4", "F4", "G#4", "C5"], "4n");
        setWhichChord("C# major 7th");
        setChordNotes("C# - F - G# - C");
      }
    }

    // handle G#/Ab chord 5
    if (noteValue === "G#/Ab" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D#4", "F#4", "A#4", "C#5"], "4n");
        setWhichChord("D# minor 7th");
        setChordNotes("D# - F# - A# - C#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D#4", "G4", "A#4", "C#5"], "4n");
        setWhichChord("D# dominant 7th");
        setChordNotes("D# - G - A# - C#");
      }
    }

    // handle G#/Ab chord 6
    if (noteValue === "G#/Ab" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["E4", "G#4", "B4", "D#5"], "4n");
        setWhichChord("E major 7th");
        setChordNotes("E - G# - B - D#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F4", "G#4", "C5", "D#5"], "4n");
        setWhichChord("F minor 7th");
        setChordNotes("F - G# - C - D#");
      }
    }

    // handle G#/Ab chord 7
    if (noteValue === "G#/Ab" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F#3", "A#3", "C#4", "E4"], "4n");
        setWhichChord("F# dominant 7th");
        setChordNotes("F# - A# - C# - E");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G3", "A#3", "C#4", "F4"], "4n");
        setWhichChord("F## half-diminished 7th");
        setChordNotes("G - A# - C# - F");
      }
    }

    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN A

    // handle A chord 1
    if (noteValue === "A" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
        setWhichChord("A minor 7th");
        setChordNotes("A - C - E - G");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A3", "C#4", "E4", "G#4"], "4n");
        setWhichChord("A major 7th");
        setChordNotes("A - C# - E - G#");
      }
    }

    // handle A chord 2
    if (noteValue === "A" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["B3", "D4", "F4", "A4"], "4n");
        setWhichChord("B half-diminished 7th");
        setChordNotes("B - D - F - A");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
        setWhichChord("B minor 7th");
        setChordNotes("B - D - F# - A");
      }
    }

    // handle A chord 3
    if (noteValue === "A" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "4n");
        setWhichChord("C major 7th");
        setChordNotes("C - E - G - B");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C#4", "E4", "G#4", "B4"], "4n");
        setWhichChord("C# minor 7th");
        setChordNotes("C# - E - G# - B");
      }
    }

    // handle A chord 4
    if (noteValue === "A" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D4", "F4", "A4", "C5"], "4n");
        setWhichChord("D minor 7th");
        setChordNotes("D - F - A - C");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D4", "F#4", "A4", "C#5"], "4n");
        setWhichChord("D major 7th");
        setChordNotes("D - F# - A - C#");
      }
    }

    // handle A chord 5
    if (noteValue === "A" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["E4", "G4", "B4", "D5"], "4n");
        setWhichChord("E minor 7th");
        setChordNotes("E - G - B - D");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["E4", "G#4", "B4", "D5"], "4n");
        setWhichChord("E dominant 7th");
        setChordNotes("E - G# - B - D");
      }
    }

    // handle A chord 6
    if (noteValue === "A" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F3", "A3", "C4", "E4"], "4n");
        setWhichChord("F major 7th");
        setChordNotes("F - A - C - E");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
        setWhichChord("F# minor 7th");
        setChordNotes("F# - A - C# - E");
      }
    }

    // handle A chord 7
    if (noteValue === "A" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G3", "B3", "D4", "F4"], "4n");
        setWhichChord("G dominant 7th");
        setChordNotes("G - B - D - F");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G#3", "B3", "D4", "F#4"], "4n");
        setWhichChord("G# half-diminished 7th");
        setChordNotes("G# - B - D - F#");
      }
    }

    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN A#/Bb

    // handle A#/Bb chord 1
    if (noteValue === "A#/Bb" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
        setWhichChord("A minor 7th");
        setChordNotes("A - C - E - G");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A#3", "D4", "F4", "A4"], "4n");
        setWhichChord("A# major 7th");
        setChordNotes("A# - D - F - A");
      }
    }

    // handle A#/Bb chord 2
    if (noteValue === "A#/Bb" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C4", "D#4", "F#4", "A#4"], "4n");
        setWhichChord("B# half-diminished 7th");
        setChordNotes("B# - D# - F# - A#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C4", "D#4", "G4", "A#4"], "4n");
        setWhichChord("B# minor 7th");
        setChordNotes("B# - D# - G - A#");
      }
    }

    // handle A#/Bb chord 3
    if (noteValue === "A#/Bb" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C#4", "F4", "G#4", "C5"], "4n");
        setWhichChord("C# major 7th");
        setChordNotes("C# - F - G# - C");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D4", "F4", "A4", "C5"], "4n");
        setWhichChord("C## minor 7th");
        setChordNotes("D - F - A - C");
      }
    }

    // handle A#/Bb chord 4
    if (noteValue === "A#/Bb" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D#4", "F#4", "A#4", "C#5"], "4n");
        setWhichChord("D# minor 7th");
        setChordNotes("D# - F# - A# - C#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D#4", "G4", "A#4", "D5"], "4n");
        setWhichChord("D# major 7th");
        setChordNotes("D# - G - A# - D");
      }
    }

    // handle A#/Bb chord 5
    if (noteValue === "A#/Bb" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F4", "G#4", "C5", "D#5"], "4n");
        setWhichChord("E# minor 7th");
        setChordNotes("E# - G# - C - D#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F4", "A4", "C5", "D#5"], "4n");
        setWhichChord("E# dominant 7th");
        setChordNotes("E# - A - C - D#");
      }
    }

    // handle A#/Bb chord 6
    if (noteValue === "A#/Bb" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F#3", "A#3", "C#4", "F4"], "4n");
        setWhichChord("F# major 7th");
        setChordNotes("F# - A# - C# - F");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
        setWhichChord("F## minor 7th");
        setChordNotes("G - A# - D - F");
      }
    }

    // handle A#/Bb chord 7
    if (noteValue === "A#/Bb" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G#3", "C4", "D#4", "F#4"], "4n");
        setWhichChord("G# dominant 7th");
        setChordNotes("G# - C - D# - F#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A3", "C4", "D#4", "G4"], "4n");
        setWhichChord("G## half-diminished 7th");
        setChordNotes("A - C - D# - G");
      }
    }

    /*--------------------------------------------------------------------*/

    // HANDLE ALL CHORDS IN B

    // handle B chord 1
    if (noteValue === "B" && button === "1") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
        setWhichChord("B minor 7th");
        setChordNotes("B - D - F# - A");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["B3", "D#4", "F#4", "A#4"], "4n");
        setWhichChord("B major 7th");
        setChordNotes("B - D# - F# - A#");
      }
    }

    // handle B chord 2
    if (noteValue === "B" && button === "2") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["C#4", "E4", "G4", "B4"], "4n");
        setWhichChord("C# half-diminished 7th");
        setChordNotes("C# - E - G - B");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["C#4", "E4", "G#4", "B4"], "4n");
        setWhichChord("C# minor 7th");
        setChordNotes("C# - E - G# - B");
      }
    }

    // handle B chord 3
    if (noteValue === "B" && button === "3") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["D4", "F#4", "A4", "C#5"], "4n");
        setWhichChord("D major 7th");
        setChordNotes("D - F# - A - C#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["D#4", "F#4", "A#4", "C#5"], "4n");
        setWhichChord("D# minor 7th");
        setChordNotes("D# - F# - A# - C#");
      }
    }

    // handle B chord 4
    if (noteValue === "B" && button === "4") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["E4", "G4", "B4", "D5"], "4n");
        setWhichChord("E minor 7th");
        setChordNotes("E - G - B - D");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["E4", "G#4", "B4", "D#5"], "4n");
        setWhichChord("E major 7th");
        setChordNotes("E - G# - B - D#");
      }
    }

    // handle B chord 5
    if (noteValue === "B" && button === "5") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
        setWhichChord("E# minor 7th");
        setChordNotes("E# - G# - C - D#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["F#3", "A#3", "C#4", "E4"], "4n");
        setWhichChord("F# dominant 7th");
        setChordNotes("F# - A# - C# - E");
      }
    }

    // handle B chord 6
    if (noteValue === "B" && button === "6") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["G3", "B3", "D4", "F#4"], "4n");
        setWhichChord("G major 7th");
        setChordNotes("G - B - D - F#");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
        setWhichChord("G# minor 7th");
        setChordNotes("G# - B - D# - F#");
      }
    }

    // handle B chord 7
    if (noteValue === "B" && button === "7") {
      if (chordValue === "minor") {
        synth.triggerAttackRelease(["A3", "C#4", "E4", "G4"], "4n");
        setWhichChord("A dominant 7th");
        setChordNotes("A - C# - E - G");
      } else if (chordValue === "major") {
        synth.triggerAttackRelease(["A#3", "C#4", "E4", "G#4"], "4n");
        setWhichChord("A# half-diminished 7th");
        setChordNotes("A# - C# - E - G#");
      }
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key >= "1" && e.key <= "7") {
      playChord(e.key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [noteValue, chordValue]);

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <Badge className="text-3xl font-bold">Theory Thing</Badge>
          <ModeToggle />
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Piano className="h-5 w-5" />
            <h4 className="text-lg">
              1. Select <span className="text-primary">Root Note</span>
            </h4>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            <Button
              variant={noteValue === "C" ? "default" : "outline"}
              className="h-12"
              onClick={updateNoteValue}
            >
              C
            </Button>
            <Button
              variant={noteValue === "C#/Db" ? "default" : "secondary"}
              className="h-12"
              onClick={updateNoteValue}
            >
              C#/Db
            </Button>
            <Button
              variant={noteValue === "D" ? "default" : "outline"}
              className="h-12"
              onClick={updateNoteValue}
            >
              D
            </Button>
            <Button
              variant={noteValue === "D#/Eb" ? "default" : "secondary"}
              className="h-12"
              onClick={updateNoteValue}
            >
              D#/Eb
            </Button>
            <Button
              variant={noteValue === "E" ? "default" : "outline"}
              className="h-12"
              onClick={updateNoteValue}
            >
              E
            </Button>
            <Button
              variant={noteValue === "F" ? "default" : "outline"}
              className="h-12"
              onClick={updateNoteValue}
            >
              F
            </Button>
            <Button
              variant={noteValue === "F#/Gb" ? "default" : "secondary"}
              className="h-12"
              onClick={updateNoteValue}
            >
              F#/Gb
            </Button>
            <Button
              variant={noteValue === "G" ? "default" : "outline"}
              className="h-12"
              onClick={updateNoteValue}
            >
              G
            </Button>
            <Button
              variant={noteValue === "G#/Ab" ? "default" : "secondary"}
              className="h-12"
              onClick={updateNoteValue}
            >
              G#/Ab
            </Button>
            <Button
              variant={noteValue === "A" ? "default" : "outline"}
              className="h-12"
              onClick={updateNoteValue}
            >
              A
            </Button>
            <Button
              variant={noteValue === "A#/Bb" ? "default" : "secondary"}
              className="h-12"
              onClick={updateNoteValue}
            >
              A#/Bb
            </Button>
            <Button
              variant={noteValue === "B" ? "default" : "outline"}
              className="h-12"
              onClick={updateNoteValue}
            >
              B
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="h-5 w-5" />
            <h4 className="text-lg">
              2. Select A <span className="text-primary">Scale</span>
            </h4>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 justify-center">
            <Button
              variant={chordValue === "major" ? "default" : "outline"}
              size="lg"
              className="w-32"
              onClick={updateChordValue}
            >
              major
            </Button>
            <Button
              variant={chordValue === "minor" ? "default" : "outline"}
              size="lg"
              className="w-32"
              onClick={updateChordValue}
            >
              minor
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">
            3. Press To <span className="text-primary">Play The Chord</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Press number keys 1-7 or click buttons below to play chords. Make
            sure silent mode is off!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <Button
              variant={activeChord === "1" ? "default" : "outline"}
              className="h-16"
              onClick={() => playChord("1")}
            >
              Chord 1
            </Button>
            <Button
              variant={activeChord === "2" ? "default" : "outline"}
              className="h-16"
              onClick={() => playChord("2")}
            >
              Chord 2
            </Button>
            <Button
              variant={activeChord === "3" ? "default" : "outline"}
              className="h-16"
              onClick={() => playChord("3")}
            >
              Chord 3
            </Button>
            <Button
              variant={activeChord === "4" ? "default" : "outline"}
              className="h-16"
              onClick={() => playChord("4")}
            >
              Chord 4
            </Button>
            <Button
              variant={activeChord === "5" ? "default" : "outline"}
              className="h-16"
              onClick={() => playChord("5")}
            >
              Chord 5
            </Button>
            <Button
              variant={activeChord === "6" ? "default" : "outline"}
              className="h-16"
              onClick={() => playChord("6")}
            >
              Chord 6
            </Button>
            <Button
              variant={activeChord === "7" ? "default" : "outline"}
              className="h-16"
              onClick={() => playChord("7")}
            >
              Chord 7
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                Current Scale
              </h2>
              <h1 className="text-3xl font-bold">
                {noteValue || chordValue ? (
                  <>
                    <span className="text-primary">{noteValue}</span>
                    {noteValue && chordValue && <span className="mx-2">•</span>}
                    <span className="text-primary">{chordValue}</span>
                  </>
                ) : (
                  <span className="text-primary">Select a note and scale</span>
                )}
              </h1>
            </div>

            {whichChord && (
              <div className="pt-2">
                <Badge variant="secondary" className="text-base px-4 py-2">
                  {whichChord}
                </Badge>
              </div>
            )}

            {chordNotes && (
              <div className="pt-2">
                <p className="text-sm text-muted-foreground mb-1">
                  Notes played
                </p>
                <p className="text-lg font-mono bg-muted px-4 py-2 rounded-md inline-block">
                  {chordNotes}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Desktop;
