import { useState } from 'react'; 
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Navbar from '../components/ui/Navbar';

export default function CreateAgent() {
  const [name, setName] = useState("");
  const [ticket, setTicket] = useState("");
  const [description, setDescription] = useState("");

  return (
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
  );
}