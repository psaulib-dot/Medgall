// Test Supabase Connection
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://tbzovlwniopojywvfffb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_enWWjp80dNXhge25iZ2vlg_ZcQRKy8Y';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testConnection() {
  console.log('🔍 Testing Supabase Connection...\n');

  try {
    // Test 1: Check if we can connect
    console.log('✅ Supabase client initialized');
    console.log(`   URL: ${SUPABASE_URL}`);
    console.log(`   Key: ${SUPABASE_ANON_KEY.substring(0, 20)}...\n`);

    // Test 2: Fetch cities
    console.log('📍 Fetching cities...');
    const { data: cities, error: citiesError } = await supabase
      .from('cities')
      .select('*')
      .limit(5);

    if (citiesError) {
      console.log(`❌ Error fetching cities: ${citiesError.message}`);
    } else {
      console.log(`✅ Cities table accessible (${cities?.length || 0} records)\n`);
    }

    // Test 3: Check profiles
    console.log('👤 Checking profiles...');
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('*');

    if (profilesError) {
      console.log(`❌ Error fetching profiles: ${profilesError.message}`);
    } else {
      console.log(`✅ Profiles table accessible (${profiles?.length || 0} records)`);
      if (profiles && profiles.length > 0) {
        console.log('   Users:');
        profiles.forEach(p => {
          console.log(`   - ${p.email} (${p.role})`);
        });
      } else {
        console.log('   ⚠️  No profiles found - run the SQL setup code first!\n');
      }
    }

    console.log('\n✅ Connection test completed successfully!');

  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
  }
}

testConnection();
