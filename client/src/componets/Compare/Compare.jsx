import React, { useState, useEffect } from "react";
import axios from "axios";

const Compare = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user/read");
        setUsers(response.data);
        if (response.data.length >= 2) {
          // default selection: first 2 users
          setSelectedUsers([response.data[0]._id, response.data[1]._id]);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  if (users.length < 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-12 text-center border border-gray-200">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Loading Comparison</h3>
            <p className="text-gray-500">Please wait while we load creator data for comparison...</p>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (index, e) => {
    const newSelection = [...selectedUsers];
    newSelection[index] = e.target.value;
    setSelectedUsers(newSelection);
  };

  const user1 = users.find(u => u._id === selectedUsers[0]);
  const user2 = users.find(u => u._id === selectedUsers[1]);

  // Calculate comparison metrics
  const getComparisonColor = (value1, value2, higherIsBetter = true) => {
    const num1 = parseFloat(value1) || 0;
    const num2 = parseFloat(value2) || 0;
    
    if (num1 === num2) return "text-gray-600";
    
    if (higherIsBetter) {
      return num1 > num2 ? "text-green-600" : "text-red-600";
    } else {
      return num1 < num2 ? "text-green-600" : "text-red-600";
    }
  };

  const getComparisonIcon = (value1, value2, higherIsBetter = true) => {
    const num1 = parseFloat(value1) || 0;
    const num2 = parseFloat(value2) || 0;
    
    if (num1 === num2) return "→";
    
    if (higherIsBetter) {
      return num1 > num2 ? "↑" : "↓";
    } else {
      return num1 < num2 ? "↑" : "↓";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Creator Comparison</h1>
          <p className="text-gray-600">Compare performance metrics between different creators</p>
        </div>

        {/* Selection Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex-1 max-w-md">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select First Creator
              </label>
              <select
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={selectedUsers[0]}
                onChange={(e) => handleChange(0, e)}
              >
                {users.map(user => (
                  <option key={user._id} value={user._id}>
                    {user.name} ({user.platform})
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>

            <div className="flex-1 max-w-md">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Second Creator
              </label>
              <select
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={selectedUsers[1]}
                onChange={(e) => handleChange(1, e)}
              >
                {users.map(user => (
                  <option key={user._id} value={user._id}>
                    {user.name} ({user.platform})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        {user1 && user2 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* User 1 Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-2xl text-gray-800">{user1.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    user1.platform === 'Instagram' ? 'bg-pink-100 text-pink-800' :
                    user1.platform === 'YouTube' ? 'bg-red-100 text-red-800' :
                    user1.platform === 'TikTok' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {user1.platform}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">{user1.email}</span>
                </div>
              </div>

              <div className="p-6">
                {/* Key Metrics */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Followers</span>
                    <span className={`font-bold ${getComparisonColor(user1.followers, user2.followers)}`}>
                      {user1.followers.toLocaleString()} 
                      <span className="ml-2 text-sm">{getComparisonIcon(user1.followers, user2.followers)}</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Average Likes</span>
                    <span className={`font-bold ${getComparisonColor(user1.averageLikes, user2.averageLikes)}`}>
                      {user1.averageLikes}
                      <span className="ml-2 text-sm">{getComparisonIcon(user1.averageLikes, user2.averageLikes)}</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Engagement Rate</span>
                    <span className={`font-bold ${getComparisonColor(user1.engagementRate, user2.engagementRate)}`}>
                      {user1.engagementRate}%
                      <span className="ml-2 text-sm">{getComparisonIcon(user1.engagementRate, user2.engagementRate)}</span>
                    </span>
                  </div>
                </div>

                {/* Recent Posts */}
                {user1.recentPosts && user1.recentPosts.length > 0 && (
                  <div className="mt-6">
                    <div className="flex items-center mb-3">
                      <svg className="w-4 h-4 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="font-semibold text-gray-700">Recent Posts</p>
                    </div>
                    <div className="space-y-3">
                      {user1.recentPosts.slice(0, 3).map((post, i) => (
                        <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-800 mb-2 line-clamp-2">{post.content}</p>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                              </svg>
                              {post.likes} likes
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                              </svg>
                              {post.comments} comments
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* User 2 Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-2xl text-gray-800">{user2.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    user2.platform === 'Instagram' ? 'bg-pink-100 text-pink-800' :
                    user2.platform === 'YouTube' ? 'bg-red-100 text-red-800' :
                    user2.platform === 'TikTok' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {user2.platform}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">{user2.email}</span>
                </div>
              </div>

              <div className="p-6">
                {/* Key Metrics */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Followers</span>
                    <span className={`font-bold ${getComparisonColor(user2.followers, user1.followers)}`}>
                      {user2.followers.toLocaleString()}
                      <span className="ml-2 text-sm">{getComparisonIcon(user2.followers, user1.followers)}</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Average Likes</span>
                    <span className={`font-bold ${getComparisonColor(user2.averageLikes, user1.averageLikes)}`}>
                      {user2.averageLikes}
                      <span className="ml-2 text-sm">{getComparisonIcon(user2.averageLikes, user1.averageLikes)}</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Engagement Rate</span>
                    <span className={`font-bold ${getComparisonColor(user2.engagementRate, user1.engagementRate)}`}>
                      {user2.engagementRate}%
                      <span className="ml-2 text-sm">{getComparisonIcon(user2.engagementRate, user1.engagementRate)}</span>
                    </span>
                  </div>
                </div>

                {/* Recent Posts */}
                {user2.recentPosts && user2.recentPosts.length > 0 && (
                  <div className="mt-6">
                    <div className="flex items-center mb-3">
                      <svg className="w-4 h-4 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="font-semibold text-gray-700">Recent Posts</p>
                    </div>
                    <div className="space-y-3">
                      {user2.recentPosts.slice(0, 3).map((post, i) => (
                        <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-800 mb-2 line-clamp-2">{post.content}</p>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                              </svg>
                              {post.likes} likes
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                              </svg>
                              {post.comments} comments
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Summary Comparison */}
        {user1 && user2 && (
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Comparison Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-700 mb-1">Followers Difference</p>
                <p className="text-lg font-bold text-blue-900">
                  {Math.abs(user1.followers - user2.followers).toLocaleString()}
                </p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-700 mb-1">Engagement Gap</p>
                <p className="text-lg font-bold text-green-900">
                  {Math.abs(user1.engagementRate - user2.engagementRate).toFixed(1)}%
                </p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-sm font-medium text-purple-700 mb-1">Likes Difference</p>
                <p className="text-lg font-bold text-purple-900">
                  {Math.abs(user1.averageLikes - user2.averageLikes)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;