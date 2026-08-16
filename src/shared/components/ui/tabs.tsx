'use client'

import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from 'react'
import {
	Root as TabsRoot,
	List as TabsListPrimitive,
	Trigger as TabsTriggerPrimitive,
	Content as TabsContentPrimitive,
} from '@radix-ui/react-tabs'

import { cn } from '@/shared/lib/utils'

const Tabs = TabsRoot

const TabsList = forwardRef<
	ElementRef<typeof TabsListPrimitive>,
	ComponentPropsWithoutRef<typeof TabsListPrimitive>
>(({ className, ...props }, ref) => (
	<TabsListPrimitive
		ref={ref}
		className={cn(
			'bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1',
			className
		)}
		{...props}
	/>
))
TabsList.displayName = TabsListPrimitive.displayName

const TabsTrigger = forwardRef<
	ElementRef<typeof TabsTriggerPrimitive>,
	ComponentPropsWithoutRef<typeof TabsTriggerPrimitive>
>(({ className, ...props }, ref) => (
	<TabsTriggerPrimitive
		ref={ref}
		className={cn(
			'ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow',
			className
		)}
		{...props}
	/>
))
TabsTrigger.displayName = TabsTriggerPrimitive.displayName

const TabsContent = forwardRef<
	ElementRef<typeof TabsContentPrimitive>,
	ComponentPropsWithoutRef<typeof TabsContentPrimitive>
>(({ className, ...props }, ref) => (
	<TabsContentPrimitive
		ref={ref}
		className={cn(
			'ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
			className
		)}
		{...props}
	/>
))
TabsContent.displayName = TabsContentPrimitive.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
