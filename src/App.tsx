import * as Tone from "tone";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Music, Piano, Play } from "lucide-react";
import { ModeToggle } from "./components/mode-toggle";

interface MouseEventWithTarget extends React.MouseEvent<HTMLButtonElement> {
  target: EventTarget & {
    innerText: string;
  };
}

function Desktop() {
  const [noteValue, setNoteValue] = useState<string>("");
  const [chordValue, setChordValue] = useState<string>("");
  const [whichChord, setWhichChord] = useState<string>("");
  const [chordNotes, setChordNotes] = useState<string>("");
  const [activeChord, setActiveChord] = useState<string>("");

  const updateNoteValue = (e: MouseEventWithTarget) => {
    setNoteValue(e.target.innerText);
  };
  const updateChordValue = (e: MouseEventWithTarget) => {
    setChordValue(e.target.innerText);
  };

  const synth = new Tone.PolySynth(Tone.AMSynth).toDestination();
  synth.volume.value = -5;

  const playChord = (button: string) => {
    // Synth engine
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
        setWhichChord("F# minor 7th");
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
        setWhichChord("C# half-diminished 7th");
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
        setWhichChord("F# half-diminished 7th");
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
        setWhichChord("C# minor 7th");
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
        setWhichChord("F# minor 7th");
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
        setWhichChord("G# half-diminished 7th");
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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-purple-50 to-indigo-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Piano className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Theory Thing
              </h1>
            </div>
          </div>
          <ModeToggle />
        </div>

        <Card className="border-0 shadow-lg bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Piano className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Select Root Note</h2>
                <p className="text-sm text-muted-foreground font-normal">
                  Choose your starting note
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {[
                "C",
                "C#/Db",
                "D",
                "D#/Eb",
                "E",
                "F",
                "F#/Gb",
                "G",
                "G#/Ab",
                "A",
                "A#/Bb",
                "B",
              ].map((note) => (
                <Button
                  key={note}
                  variant={
                    noteValue === note
                      ? "default"
                      : note.includes("#") || note.includes("b")
                      ? "secondary"
                      : "outline"
                  }
                  className={`h-14 font-semibold ${
                    note.includes("#") || note.includes("b")
                      ? "text-sm bg-stone-800 text-white hover:bg-stone-700 dark:bg-stone-700 dark:hover:bg-stone-600"
                      : "text-base"
                  } hover:scale-105 transition-all duration-200`}
                  onClick={updateNoteValue}
                >
                  {note}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Music className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Select Scale Type</h2>
                <p className="text-sm text-muted-foreground font-normal">
                  Choose major or minor scale
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 justify-center">
              <Button
                variant={chordValue === "major" ? "default" : "outline"}
                size="lg"
                className="w-40 h-16 text-lg font-semibold hover:scale-105 transition-all duration-200"
                onClick={updateChordValue}
              >
                major
              </Button>
              <Button
                variant={chordValue === "minor" ? "default" : "outline"}
                size="lg"
                className="w-40 h-16 text-lg font-semibold hover:scale-105 transition-all duration-200"
                onClick={updateChordValue}
              >
                minor
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Play className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Play Chords</h2>
                <p className="text-sm text-muted-foreground font-normal">
                  Press number keys 1-7 or click buttons • Make sure silent mode
                  is off!
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <Button
                  key={num}
                  variant={
                    activeChord === num.toString() ? "default" : "outline"
                  }
                  className="h-20 text-lg font-semibold hover:scale-105 transition-all duration-200 flex flex-col gap-1"
                  onClick={() => playChord(num.toString())}
                >
                  <span className="text-2xl">{num}</span>
                  <span className="text-xs opacity-70">Chord</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-purple-500/5 dark:from-primary/10 dark:to-purple-500/10 mb-6">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Current Scale
                </h3>
                <div className="text-4xl font-bold">
                  {noteValue || chordValue ? (
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-primary">{noteValue}</span>
                      {noteValue && chordValue && (
                        <span className="text-muted-foreground">•</span>
                      )}
                      <span className="text-primary capitalize">
                        {chordValue}
                      </span>
                    </div>
                  ) : (
                    <span className="text-muted-foreground text-2xl">
                      Select a note and scale above
                    </span>
                  )}
                </div>
              </div>

              {whichChord && (
                <div>
                  <Badge
                    variant="secondary"
                    className="text-lg px-6 py-2 font-semibold"
                  >
                    {whichChord}
                  </Badge>
                </div>
              )}

              {chordNotes && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Notes Played</p>
                  <div className="bg-muted/50 px-6 py-3 rounded-lg inline-block">
                    <p className="text-xl font-mono font-semibold tracking-wider">
                      {chordNotes}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mt-12 pt-8 border-t border-border/50">
          <a
            href="https://www.github.com/taariqelliott"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            <span className="font-medium">GitHub</span>
          </a>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Developed by</span>
            <a
              href="https://taariqelliott.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge
                variant="secondary"
                className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                @taariqelliott
              </Badge>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop;
