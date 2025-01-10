import { useConversation } from "@11labs/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function VoiceAgentDemo() {
  const [isStarted, setIsStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { toast } = useToast();
  
  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to ElevenLabs");
      toast({
        title: "Connected to AI Assistant",
        description: "You can now start speaking with the AI agent",
      });
    },
    onDisconnect: () => {
      console.log("Disconnected from ElevenLabs");
      setIsStarted(false);
    },
    onError: (error) => {
      console.error("ElevenLabs error:", error);
      toast({
        title: "Connection Error",
        description: "Failed to connect to the AI assistant. Please try again.",
        variant: "destructive",
      });
    },
    overrides: {
      agent: {
        prompt: {
          prompt: "You are a helpful medical assistant who can help patients understand their symptoms and provide general health information. You should be professional but friendly.",
        },
        firstMessage: "Hello! I'm your AI medical assistant. How can I help you today?",
        language: "en",
      },
      tts: {
        voiceId: "EXAVITQu4vr4xnSDxMaL", // Sarah voice
      },
    },
  });

  const handleStart = async () => {
    try {
      // Request microphone access
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Start the conversation
      await conversation.startSession({
        agentId: "default_medical_assistant", // Replace with your actual agent ID
      });
      
      setIsStarted(true);
    } catch (error) {
      console.error("Failed to start conversation:", error);
      toast({
        title: "Microphone Access Required",
        description: "Please allow microphone access to use the voice assistant.",
        variant: "destructive",
      });
    }
  };

  const handleStop = async () => {
    await conversation.endSession();
    setIsStarted(false);
  };

  const toggleMute = async () => {
    await conversation.setVolume({ volume: isMuted ? 1 : 0 });
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Try Our AI Voice Assistant
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Experience real-time conversations with our AI medical assistant. Get instant responses to your health-related questions.
        </p>
        
        <Card className="p-8 mb-8 bg-white shadow-lg">
          <div className="space-y-6">
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                onClick={isStarted ? handleStop : handleStart}
                className="w-48"
              >
                {isStarted ? (
                  <>
                    <MicOff className="mr-2 h-5 w-5" />
                    Stop Conversation
                  </>
                ) : (
                  <>
                    <Mic className="mr-2 h-5 w-5" />
                    Start Conversation
                  </>
                )}
              </Button>
              
              {isStarted && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={toggleMute}
                  className="w-48"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="mr-2 h-5 w-5" />
                      Unmute Assistant
                    </>
                  ) : (
                    <>
                      <Volume2 className="mr-2 h-5 w-5" />
                      Mute Assistant
                    </>
                  )}
                </Button>
              )}
            </div>
            
            {isStarted && (
              <div className="text-sm text-gray-500">
                Speak naturally - the AI assistant will respond to your voice
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}