<<<<<<< Updated upstream
import { useState } from 'react'; 
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
=======
import { useState, useRef, useEffect } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Upload } from '@mui/icons-material';
import { scrambleText } from '../utils/textEffects';
import ModelViewer from '../components/ui/ModelViewer';
>>>>>>> Stashed changes
import Navbar from '../components/ui/Navbar';

export default function CreateAgent() {
  const [name, setName] = useState("");
  const [ticket, setTicket] = useState("");
  const [description, setDescription] = useState("");
  const [voice, setVoice] = useState("uk_female");
  const [modelUrl, setModelUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  const handleSubmit = async () => {
    try {
      if (!name || !ticket || !description) {
        alert('Please fill in all required fields (Name, Ticket, and Description)');
        return;
      }

      const response = await fetch('/api/agents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          ticket,
          description,
          voiceType: voice,
          imageUrl: imageUrl || '',
          modelUrl: modelUrl || '',
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Reset form
        setName('');
        setTicket('');
        setDescription('');
        setVoice('uk_female');
        setModelUrl(null);
        setImageUrl(null);
        alert('Agent created successfully!');
      } else {
        const errorMessage = data.details 
          ? `Error creating agent: ${data.error}\nDetails: ${JSON.stringify(data.details, null, 2)}`
          : `Error creating agent: ${data.error}`;
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error creating agent:', error);
      alert('Error creating agent: ' + error.message);
    }
  };

  const handleHover = (e) => {
    scrambleText(e.target, e.target.getAttribute('data-text'));
  };

  const handleModelUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setModelUrl(url);
    }
  };

  const processImage = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const size = Math.min(img.width, img.height);
        canvas.width = size;
        canvas.height = size;
        
        const ctx = canvas.getContext('2d');
        // Calculate cropping position to center the image
        const offsetX = (img.width - size) / 2;
        const offsetY = (img.height - size) / 2;
        
        ctx.drawImage(img, offsetX, offsetY, size, size, 0, 0, size, size);
        
        canvas.toBlob((blob) => {
          resolve(URL.createObjectURL(blob));
        }, 'image/jpeg', 0.95);
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const croppedImageUrl = await processImage(file);
      setImageUrl(croppedImageUrl);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  useEffect(() => {
    return () => {
      if (modelUrl) {
        URL.revokeObjectURL(modelUrl);
      }
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [modelUrl, imageUrl]);

  return (
<<<<<<< Updated upstream
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="flex justify-center items-center w-full bg-gray-900 text-white px-4 py-12 relative">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-40" />
        
        <div className="relative w-[120vh] min-h-[80vh] bg-gray-800 p-12 rounded-xl shadow-2xl border border-gray-700 backdrop-blur-lg flex flex-col">
          <h2 className="text-2xl font-semibold text-center mb-6">Create an Agent</h2>
          
          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-12 w-full">
            <div className="flex flex-col gap-6">
              <label className="text-gray-300">Agent Name</label>
              <Input placeholder="Enter Agent Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500" />
              
              <label className="text-gray-300">Ticket (4 letters max)</label>
              <Input placeholder="Enter Ticket" maxLength={4} value={ticket} onChange={(e) => setTicket(e.target.value)} className="bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" />
              
              <label className="text-gray-300">Description</label>
              <Textarea placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} className="h-32 bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 h-[14rem]" />
              
              {/* Create Button */}
              <Button className="button button-primary mt-auto text-white py-3 rounded-lg shadow-md backdrop-blur-md h-[45pt]">+ Create</Button>
            </div>
            
            {/* Right Section */}
            <div className="flex flex-col w-full">
              {/* Model Preview Box (Square) */}
              <div className="w-full aspect-square flex justify-center items-center border-2 border-gray-600 rounded-lg bg-gray-700 hover:border-gradient-to-r from-purple-500 to-blue-500">
                <span className="text-gray-400">Model Preview</span>
              </div>
              
              {/* Upload Buttons Below Model Preview */}
              <div className="flex gap-6 mt-6 w-full">
                <Button variant="outline" className="button w-1/2 h-22 bg-gray-700 border border-gray-600 rounded-lg flex flex-col items-center justify-center hover:border-gradient-to-r from-blue-400 to-purple-500">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="mt-2 text-gray-300">Upload Image</span>
                </Button>
                <Button variant="outline" className="button w-1/2 h-22 bg-gray-700 border border-gray-600 rounded-lg flex flex-col items-center justify-center hover:border-gradient-to-r from-green-400 to-teal-500">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <div className='col'>
                    <span className="mt-2 text-gray-300">Upload Model</span>
                    <span className="mt-2 text-gray-400 block">glb / gltf</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
=======
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', px: 4, py: 4, position: 'relative' }}>
        <Box sx={{ 
          width: '120vh', 
          minHeight: '80vh',
          color: 'white',
          p: 4, 
          position: 'relative' 
        }}>
          <Box sx={{ textAlign: 'center', mb: 6, typography: 'h4', fontWeight: 600, color: 'white' }}>Create an Agent</Box>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <TextField 
                label="Agent Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                sx={{ 
                  input: { color: 'white' }, 
                  label: { color: 'grey.300' },
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#0B5CD6',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0B5CD6',
                    }
                  }
                }}
              />
              
              <TextField 
                label="Ticket (4 letters max)"
                value={ticket}
                onChange={(e) => setTicket(e.target.value)}
                inputProps={{ maxLength: 4 }}
                variant="outlined"
                sx={{ 
                  input: { color: 'white' }, 
                  label: { color: 'grey.300' },
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#0B5CD6',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0B5CD6',
                    }
                  }
                }}
              />
              
              <TextField 
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={8}
                variant="outlined"
                sx={{ 
                  textarea: { color: 'white' }, 
                  label: { color: 'grey.300' },
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#0B5CD6',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0B5CD6',
                    }
                  }
                }}
              />
              
              <FormControl>
                <InputLabel 
                  id="voice-select-label" 
                  sx={{ 
                    color: 'grey.300',
                    '&.Mui-focused': {
                      color: '#0B5CD6'
                    }
                  }}
                >
                  Agent Voice
                </InputLabel>
                <Select
                  labelId="voice-select-label"
                  value={voice}
                  label="Agent Voice"
                  onChange={(e) => setVoice(e.target.value)}
                  sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.23)'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#0B5CD6'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#0B5CD6'
                    },
                    '.MuiSvgIcon-root': {
                      color: 'grey.300'
                    }
                  }}
                >
                  <MenuItem value="us_male">US Male</MenuItem>
                  <MenuItem value="us_female">US Female</MenuItem>
                  <MenuItem value="uk_male">UK Male</MenuItem>
                  <MenuItem value="uk_female">UK Female</MenuItem>
                </Select>
              </FormControl>
              
              <Button 
                onMouseEnter={handleHover}
                data-text="[ Create ]"
                onClick={handleSubmit}
                sx={{ 
                  mt: 'auto',
                  color: '#0B5CD6',
                  fontFamily: 'VT323',
                  textTransform: 'none',
                  fontSize: '24px'
                }}
              >
                <Typography variant="h5" sx={{ fontFamily: 'VT323' }}>[ Create ]</Typography>
              </Button>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box 
                ref={containerRef}
                sx={{ 
                  width: '100%', 
                  aspectRatio: '1/1', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  border: 2,
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 0,
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {modelUrl && (
                  <Button 
                    onMouseEnter={handleHover}
                    data-text="[ X ]"
                    onClick={() => setModelUrl(null)}
                    sx={{ 
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      minWidth: 'unset',
                      color: '#0B5CD6',
                      fontFamily: 'VT323',
                      textTransform: 'none',
                      fontSize: '24px',
                      zIndex: 1
                    }}
                  >
                    <Typography variant="h5" sx={{ fontFamily: 'VT323' }}>[ X ]</Typography>
                  </Button>
                )}
                {imageUrl && (
                  <>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        left: 8,
                        width: '30%',
                        aspectRatio: '1/1',
                        bgcolor: 'rgba(0,0,0,0.3)',
                        border: 2,
                        borderColor: 'rgba(255,255,255,0.1)',
                        zIndex: 1,
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img 
                        src={imageUrl} 
                        alt="Agent" 
                        style={{
                          minWidth: '100%',
                          minHeight: '100%',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                      <Button 
                        onMouseEnter={handleHover}
                        data-text="[ X ]"
                        onClick={() => setImageUrl(null)}
                        sx={{ 
                          position: 'absolute',
                          top: 4,
                          right: 4,
                          minWidth: 'unset',
                          color: '#0B5CD6',
                          fontFamily: 'VT323',
                          textTransform: 'none',
                          fontSize: '16px',
                          p: 0,
                          '&:hover': {
                            bgcolor: 'rgba(5, 19, 34, 0.1)'
                          }
                        }}
                      >
                        <Typography variant="h6" sx={{ fontFamily: 'VT323' }}>[ X ]</Typography>
                      </Button>
                    </Box>
                  </>
                )}
                <Box sx={{ 
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  {modelUrl ? (
                    <ModelViewer 
                      modelUrl={modelUrl} 
                      width={dimensions.width}
                      height={dimensions.height}
                    />
                  ) : (
                    <Box sx={{ color: 'grey.400' }}>Model Preview</Box>
                  )}
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 4, mt: 4 }}>
                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <input
                    type="file"
                    ref={imageInputRef}
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                  />
                  <Button 
                    onMouseEnter={handleHover}
                    onClick={handleImageClick}
                    data-text="[ Upload Image ]"
                    sx={{ 
                      width: '100%',
                      color: '#0B5CD6',
                      fontFamily: 'VT323',
                      textTransform: 'none',
                      fontSize: '24px'
                    }}
                  >
                    [ Upload Image ]
                  </Button>
                </Box>
                
                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept=".glb,.gltf"
                    style={{ display: 'none' }}
                    onChange={handleModelUpload}
                  />
                  <Button 
                    onMouseEnter={handleHover}
                    onClick={handleUploadClick}
                    data-text="[ Upload Model ]"
                    sx={{ 
                      width: '100%',
                      color: '#0B5CD6',
                      fontFamily: 'VT323',
                      textTransform: 'none',
                      fontSize: '24px'
                    }}
                  >
                    [ Upload Model ]
                  </Button>
                  <Typography sx={{ color: 'grey.400', fontSize: '0.7rem', mt: -1 }}>glb / gltf</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
>>>>>>> Stashed changes
  );
}