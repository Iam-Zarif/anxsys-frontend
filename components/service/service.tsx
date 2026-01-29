"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/service/ServiceCard";
import { ServiceDetailModal } from "@/components/service/ServiceDetailModal";
import { colors } from "@/constants/color";
import { useFetchData } from "@/lib/hooks/useFetchData";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

type ServiceType = {
  title: string;
  slug: string;
  icon: string;
  description: string;
  features: string[];
};

type ApiResponse<T> = {
  success: boolean;
  data: T;
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null,
  );

  //fetching the reuseable fetch data
  const { data, loading, error } =
    useFetchData<ApiResponse<ServiceType[]>>("/service");
  console.log("showing the data", data);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const services = data?.data ?? [];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background.light }}
    >
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
          <SectionHeader
            title="What We Offer"
            subtitle="From concept to deployment, we provide end-to-end software solutions"
            variant="light"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                onClick={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
